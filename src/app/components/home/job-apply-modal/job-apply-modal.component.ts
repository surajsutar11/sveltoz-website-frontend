
import { Component, Inject, Input, input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job-apply-modal',
  templateUrl: './job-apply-modal.component.html',
  styleUrls: ['./job-apply-modal.component.scss'],
  standalone: false
})
export class JobApplyModalComponent {
  //  @Input() jobData: any;
  applyForm!: FormGroup;
  resumeUploaded: File | null = null;
  submitAttempted = false;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<JobApplyModalComponent>,
    private apiService: ApiServiceService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public jobData: any
  ) { }

  ngOnInit(): void {
    this.applyForm = this.fb.group({
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
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      notes: [''],
      resume: [null, Validators.required],
      post_id: [this.jobData.id, Validators.required]
    });
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.resumeUploaded = file;
    }
  }

  onSubmit() {
    this.submitAttempted = true;

    if (this.applyForm.invalid || !this.resumeUploaded) {
      this.applyForm.markAllAsTouched();
      this.toastr.info("Please fill all fields & upload resume");
      return;
    }

    const formData = new FormData();
    formData.append('name', this.applyForm.value.name);
    formData.append('email', this.applyForm.value.email);
    formData.append('phone', this.applyForm.value.phone);
    formData.append('notes', this.applyForm.value.notes);
    formData.append('resume', this.resumeUploaded!);
    formData.append('post_id', this.applyForm.value.post_id);
    this.apiService.applyJob(formData).subscribe({
      next: (res) => {
        this.toastr.success("Application submitted successfully!");
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.toastr.error("Something went wrong. Try again!");
        console.error(err);
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

}
