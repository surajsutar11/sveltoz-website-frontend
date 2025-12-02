import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobApplyModalComponent } from '../job-apply-modal/job-apply-modal.component';
import { ApiServiceService } from '../api-service.service';

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

  jobs: Job[] = []
   
   constructor(private dialog: MatDialog, private api: ApiServiceService) {
   
   }
  ngOnInit(): void {
     this.api.listPosts().subscribe({
        next: (res) => { this.jobs = res.data },
        error: (err) => console.error("Error:", err)
      });
  }


  apply(job: Job) {
    this.dialog.open(JobApplyModalComponent, {
      width: 'auto',
      data: job,
    });
  }
}
