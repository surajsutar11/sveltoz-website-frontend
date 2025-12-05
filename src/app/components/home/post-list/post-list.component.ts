import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from '../api-service.service';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
export interface JobPost {
  id: number;
  title: string;
  company: string;
  location: string;
  job_type?: string;
  experience_level?: string;
  created_at?: string;
  status?: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  standalone: false
})
export class PostListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'location',
    'job_type',
    'status',
    'created_at',
    'actions'
  ];
  dataSource = new MatTableDataSource<JobPost>([]);
  isLoading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private apiService: ApiServiceService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.isLoading = true;
    this.apiService.listPosts().subscribe({
      next: (res: any) => {
        const posts: JobPost[] = res?.data ?? res ?? [];
        this.dataSource = new MatTableDataSource(posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '1000px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadPosts();
      }
    });
  }

  openEditDialog(post: JobPost): void {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '700px',
      data: post
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'saved') {
        this.loadPosts();
      }
    });
  }

 deletePost(post: JobPost): void {
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    width: '360px',
    disableClose: true
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === true) {  // Ensure only when true
      this.apiService.deletePost(post.id).subscribe({
        next: () => {
          this.loadPosts();
          this.toastr.success("Job post deleted successfully");
        },
        error: () => {
          this.toastr.error("Failed to delete job post. Try again.");
        }
      });
    }
  });
}

}
