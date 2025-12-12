import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobApplyModalComponent } from '../job-apply-modal/job-apply-modal.component';
import { ApiServiceService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';

interface Job {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-career',
  standalone: false,
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
 isAdminLoggedIn: boolean = false;
  jobs: Job[] = []

  constructor(private dialog: MatDialog, private api: ApiServiceService,
    private toastr: ToastrService) { }


 ngOnInit(): void {
  this.api.listGetPostsWithoutToken().subscribe({
    next: (res) => {
      this.jobs = res.data;  // Filter only active posts
      // this.toastr.success("Job posts loaded successfully");
    },
    error: (err) => {
      console.error("Error:", err)
      // this.toastr.error("Failed to load job posts. Try again.");
    }
  });
  this.isAdminLoggedIn = !!this.api.getToken();
}

  apply(job: Job) {
    this.dialog.open(JobApplyModalComponent, {
      width: 'auto',
      data: job,
    });
  }
}
