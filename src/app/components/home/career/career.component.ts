import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobApplyModalComponent } from '../job-apply-modal/job-apply-modal.component';
import { ApiServiceService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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

  constructor(private dialog: MatDialog, private api: ApiServiceService,private sanitizer: DomSanitizer,
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

expandedJobs: { [key: number]: boolean } = {};

formatDescription(desc: string): string[] {
  if (!desc) return [];
  return desc
    .split('\n')
    .map(line => line.replace('•', '').trim())
    .filter(line => line.length > 0);
}

toggleDescription(jobId: number): void {
  this.expandedJobs[jobId] = !this.expandedJobs[jobId];
}

isExpanded(jobId: number): boolean {
  return !!this.expandedJobs[jobId];
}

sanitizeHtml(html: string): SafeHtml {
  return this.sanitizer.bypassSecurityTrustHtml(html);
}

  apply(job: Job) {
    this.dialog.open(JobApplyModalComponent, {
      width: 'auto',
      data: job,
    });
  }

  shouldShowReadMore(description: string): boolean {
  if (!description) return false;

  // Remove HTML tags to get pure text length
  const text = description.replace(/<[^>]*>/g, '').trim();
  return text.length > 200;
}

}
