import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {

  constructor(private apiService:ApiServiceService, private router:Router) {}

ngOnInit(): void {
  if(!this.apiService.getToken()){
    this.router.navigate(['/admin/login']);
  }
}
}
