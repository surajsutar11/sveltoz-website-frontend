import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { MoreProyectsComponent } from './more-proyects/more-proyects.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GeneralModule } from '../general/general.module';
import { IndustriesComponent } from './industries/industries.component';
import { ResourceCenterComponent } from './resource-center/resource-center.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { DifferentiatorsComponent } from './differentiators/differentiators.component';
import { ServiceComponent } from '../service-page/service/service.component';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CareerComponent } from './career/career.component';
import { JobApplyModalComponent } from './job-apply-modal/job-apply-modal.component';
import { AdminPanelComponent } from '../pages/pages/admin-panel/admin-panel.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppliedPostListComponent } from './aaplied-post-list/applied-post-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';


import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { SuccessStoriesPageComponent } from './success-stories-page/success-stories-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    JobsComponent,
    ProyectsComponent,
    MoreProyectsComponent,
    ContactComponent,
    IndustriesComponent,
    ResourceCenterComponent,
    DifferentiatorsComponent,
    ServicesHomeComponent,
    CareerComponent,
    JobApplyModalComponent,
    AdminPanelComponent,
    AppliedPostListComponent,
    PostListComponent,
    SuccessStoriesPageComponent,
    AdminDashboardComponent,
    PostDialogComponent
    
  ],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    NgbNavModule,
    CarouselModule,
    MatPaginatorModule,
    GeneralModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDialogActions,
    MatLabel,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatCheckboxModule,

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }
