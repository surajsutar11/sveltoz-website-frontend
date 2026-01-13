import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiServiceService } from '../api-service.service';

export interface Application {
  id: number;
  name: string;
  email: string;
  phone?: string;
  post_id: number;
  post_title: string;
  status?: string;
  created_at?: string;
  resume_url?: string;
}

@Component({
  selector: 'app-applied-post-list',
  templateUrl: './applied-post-list.component.html',
  styleUrls: ['./applied-post-list.component.scss'],
  standalone: false
})
export class AppliedPostListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'post_title',
    // 'status',
    'salary',
    'created_at',
    'actions'
  ];
  dataSource = new MatTableDataSource<Application>([]);
  isLoading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    this.isLoading = true;
    this.apiService.listOfApplications().subscribe({
      next: (res: any) => {
        const apps: Application[] = res?.data ?? res ?? [];
        this.dataSource.data = apps;   // ✅ FIX
         this.dataSource.paginator = this.paginator;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const createdDate = new Date(data.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).toLowerCase();

      return data.name.toLowerCase().includes(filter) ||
        data.email.toLowerCase().includes(filter) ||
        data.post?.title.toLowerCase().includes(filter) ||
        createdDate.includes(filter);
    };

    this.dataSource.filter = filterValue;
  }


  openResume(row: Application): void {
    this.apiService.downloadResume(row.id).subscribe({
      next: (response: any) => {

        const blob = response.body;

        // Read filename from response headers (FastAPI sets it)
        const contentDisposition = response.headers.get('content-disposition');

        let filename = 'resume.pdf';
        if (contentDisposition) {
          const match = contentDisposition.match(/filename="?(.+)"?/);
          if (match) filename = match[1];
        }

        const blobUrl = window.URL.createObjectURL(blob);

        // Open in new tab (PDF viewer)
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        a.target = '_blank';
        a.click();

        // Clean URL object
        setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
      },

      error: (err) => {
        console.error("Download error:", err);
        alert("Error downloading resume.");
      }
    });
  }
}
