import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiServiceService } from '../api-service.service';

export interface JobPost {
  id?: number;  // optional for new posts
  title: string;
  department: string;
  location: string;
  job_type: string;
  salary: string;
  is_active: boolean;
  description: string;

  // If your old API still returns these, keep them optional:
  company?: string;
  experience_level?: string;
  status?: string;
  created_at?: string;
}

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss'],
  standalone: false
})
export class PostDialogComponent implements OnInit {
  postForm!: FormGroup;
  isEditMode = false;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiServiceService,
    private dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JobPost | null
  ) {}

  ngOnInit(): void {
    this.isEditMode = !!this.data;

    this.postForm = this.fb.group({
      title: [this.data?.title || '', [Validators.required]],
      department: [this.data?.department || '', [Validators.required]],
      location: [this.data?.location || '', [Validators.required]],
      job_type: [this.data?.job_type || 'Full-time', [Validators.required]],
      salary: [this.data?.salary || '', [Validators.required]],
      is_active: [
        this.data?.is_active !== undefined ? this.data.is_active : true
      ],
      description: [
        (this.data as any)?.description || '',
        [Validators.required]
      ]
    });
  }

  onSave(): void {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const payload = this.postForm.value;
    // payload shape now matches:
    // { department, job_type, title, description, location, salary, is_active }

    if (this.isEditMode && this.data?.id != null) {
      this.apiService.updatePost(this.data.id, payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.dialogRef.close('saved');
        },
        error: () => {
          this.isSaving = false;
        }
      });
    } else {
      this.apiService.createPost(payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.dialogRef.close('saved');
        },
        error: () => {
          this.isSaving = false;
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
