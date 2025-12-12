import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { AboutComponent } from './components/home/about/about.component';
import { JobsComponent } from './components/home/jobs/jobs.component';
import { IndustriesComponent } from './components/home/industries/industries.component';
import { ResourceCenterComponent } from './components/home/resource-center/resource-center.component';
import { DifferentiatorsComponent } from './components/home/differentiators/differentiators.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { ServiceComponent } from './components/service-page/service/service.component';
import { AdminPanelComponent } from './components/pages/pages/admin-panel/admin-panel.component';
import { AuthGuard } from './components/auth.guard';
import { SuccessStoriesPageComponent } from './components/home/success-stories-page/success-stories-page.component';
import { AppliedPostListComponent } from './components/home/aaplied-post-list/applied-post-list.component';
import { PostListComponent } from './components/home/post-list/post-list.component';
import { AdminDashboardComponent } from './components/home/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'story', component: JobsComponent },
  { path: 'vision', component: IndustriesComponent },
  { path: 'mission', component: ResourceCenterComponent },
  { path: 'culture', component: DifferentiatorsComponent },
  { path: 'admin-panel', component: AdminPanelComponent},
  { path: 'success-stories', component: SuccessStoriesPageComponent },
  {path: 'applied-posts', component: AppliedPostListComponent},
  {path:'job-posts', component: PostListComponent},
  { path: 'admin', component: AdminDashboardComponent }, 
  // Keep dynamic route at the end
  // { path: ':language', component: HomeComponent },
  { path: '', component: HomeComponent },

  { path: '**', pathMatch: 'full', redirectTo: '' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
