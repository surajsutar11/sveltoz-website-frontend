
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-job-apply-modal',
  templateUrl: './job-apply-modal.component.html',
  styleUrls: ['./job-apply-modal.component.scss'],
  standalone: false
})
export class JobApplyModalComponent {

  resumeFile: File | null = null;

  applyForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    resume: [ Validators.required],
    coverLetter: ['']
  });

  constructor(
    public dialogRef: MatDialogRef<JobApplyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public jobData: any,
    private fb: FormBuilder, private api: ApiServiceService
  ) {
  }

  onResumeUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.resumeFile = file;
      this.applyForm.patchValue({ resume: file.name });
    }
  }

  submit() {
    if (this.applyForm.invalid) {
      this.applyForm.markAllAsTouched();
      return;
    }
    
const body = {
  name: this.applyForm.value.fullName!,
  email: this.applyForm.value.email!,
  phone: this.applyForm.value.phone!,
  post_id: this.jobData.id,
  resume: this.resumeFile!, 
  notes: this.applyForm.value.coverLetter,
  body:'None'
};

this.api.applyForJob(body).subscribe({
  next: (res) => {
    console.log("Success:", res);
    alert("Application Submitted Successfully");
  },
  error: (err) => console.error("Error:", err)
});

    this.dialogRef.close();
  }
}
