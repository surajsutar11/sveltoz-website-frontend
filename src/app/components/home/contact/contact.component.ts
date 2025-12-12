import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false
})
export class ContactComponent {
  contactForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/^(?!\s*$)[A-Za-z ]+$/)
      ]],

      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) // strict email
        ]
      ],
      message: ['', [Validators.required, Validators.pattern(/.*\S.*/)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    this.isSubmitting = true;

    this.apiService.createContact(this.contactForm.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.toastr.success('Message sent successfully!');
        this.contactForm.reset();
      },

      error: (err) => {
        this.isSubmitting = false;

        let errorMessage = "Something went wrong!";

        if (err?.error?.detail && Array.isArray(err.error.detail)) {
          errorMessage = err.error.detail[0].msg;   // Extract backend message
        }

        this.toastr.error(errorMessage);
      }

    });
  }
}
