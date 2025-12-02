import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/components/home/api-service.service';
import { AuthService } from 'src/app/components/auth.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  standalone: false
})
export class AdminPanelComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private jobService: ApiServiceService,
    private router: Router,private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false],
    });
    this.isLoading = this.authService.isAuthenticated()
    console.log(this.authService.isAuthenticated());
  }
  ngOnInit(): void {
    this.isLoading = this.authService.isAuthenticated()
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    // this.isLoading = true;
    this.errorMessage = '';

    const { email, password } = this.loginForm.value;
    this.jobService.login(email, password).subscribe({
      next: (res) => {
        // this.isLoading = false;

        if (res?.success && res?.data?.access_token) {
          localStorage.setItem('token', res.data.access_token);
          this.router.navigate(['/admin']);

        } else {
          this.errorMessage = res?.message || 'Invalid login';
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || 'Login failed';
      }
    });
  }
}
function canActivate(): boolean {
  throw new Error('Function not implemented.');
}

