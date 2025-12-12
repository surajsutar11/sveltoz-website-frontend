import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/components/home/api-service.service';
import { AuthService } from 'src/app/components/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  standalone: false
})
export class AdminPanelComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  isForgotPasswordMode = false;
  showOtpSection = false;

  constructor(
    private fb: FormBuilder,
    private jobService: ApiServiceService,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });

    this.forgotPasswordForm = this.fb.group({
      forgotEmail: ['', [Validators.required, Validators.email]],
      otp: [''],
      password: [''],
      confirmPassword: ['']
    });

    this.isLoading = this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    this.isLoading = this.authService.isAuthenticated();

    // Load saved login from sessionStorage
    const savedEmail = sessionStorage.getItem('savedEmail');
    const savedPassword = sessionStorage.getItem('savedPassword');

    if (savedEmail && savedPassword) {
      this.loginForm.patchValue({
        email: savedEmail,
        password: savedPassword,
        remember: true
      });
    }
  }


  switchToForgotPassword() {
    this.isForgotPasswordMode = true;
  }

  switchToLogin() {
    this.isForgotPasswordMode = false;
    this.showOtpSection = false;
  }

  onForgotPassword() {
  if (!this.showOtpSection && this.forgotPasswordForm.get('forgotEmail')?.invalid) {
    this.forgotPasswordForm.get('forgotEmail')?.markAsTouched();
    return;
  }

  const email = this.forgotPasswordForm.value.forgotEmail;

  // Step 1: Send Reset Request API
  if (!this.showOtpSection) {
    this.jobService.forgetPassword({email}).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.toastr.success("OTP sent to your email");
          this.showOtpSection = true;

          // Add validators after success
          this.forgotPasswordForm.get('otp')?.setValidators([Validators.required]);
          this.forgotPasswordForm.get('password')?.setValidators([Validators.required]);
          this.forgotPasswordForm.get('confirmPassword')?.setValidators([Validators.required]);

          this.forgotPasswordForm.get('otp')?.updateValueAndValidity();
          this.forgotPasswordForm.get('password')?.updateValueAndValidity();
          this.forgotPasswordForm.get('confirmPassword')?.updateValueAndValidity();
        }
      },
      error: () => {
        this.toastr.error("Email not found!");
      }
    });

    return;
  }

  // Step 2: When user submits OTP + new password
  const otp = this.forgotPasswordForm.value.otp;
  const password = this.forgotPasswordForm.value.password;
  const confirmPassword = this.forgotPasswordForm.value.confirmPassword;

  if (password !== confirmPassword) {
    this.toastr.error("Passwords do not match");
    return;
  }

  const body = { email, otp, password };

  this.jobService.resetPassword(body).subscribe({
    next: (res: any) => {
      if (res.success) {
        this.toastr.success("Password reset successfully!");
        this.switchToLogin();
      }
    },
    error: () => this.toastr.error("Invalid OTP")
  });
}


  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.errorMessage = '';

    const { email, password, remember } = this.loginForm.value;

    //  Store email/password only if Remember Me is checked
    if (remember) {
      sessionStorage.setItem('savedEmail', email);
      sessionStorage.setItem('savedPassword', password);
    } else {
      sessionStorage.removeItem('savedEmail');
      sessionStorage.removeItem('savedPassword');
    }

    this.jobService.login(email, password).subscribe({
      next: (res) => {

        if (res?.success && res?.data?.access_token) {
          localStorage.setItem('token', res.data.access_token);
          localStorage.setItem('hasLoggedIn', 'true');

          this.toastr.success('Login successful!');

          window.location.reload(); // refresh & redirect automatically based on routing
        } else {
          this.errorMessage = res?.message || 'Invalid login';
          this.toastr.error(this.errorMessage);
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || 'Login failed';
        this.toastr.error(this.errorMessage);
      }
    });
  }

}
