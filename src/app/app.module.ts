import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { GeneralModule } from './components/general/general.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainNavComponent } from './components/general/main-nav/main-nav.component';
import { ServicePageModule } from './components/service-page/service-page.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { MatPaginatorModule } from '@angular/material/paginator';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    /* ArchiveComponent */
  ],
  bootstrap: [AppComponent],

  imports: [BrowserAnimationsModule,
    HomeModule,
    GeneralModule,
    ServicePageModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSnackBarModule,
    // AnimateOnScrollModule.forRoot(),
    // MatDialog,
    BrowserModule,
    AppRoutingModule,

    MatDialogModule,     // <mat-dialog-content>, <mat-dialog-actions>
    MatFormFieldModule,  // <mat-form-field>, <mat-label>
    MatInputModule,      // matInput on <input>, <textarea>
    MatSelectModule,     // <mat-select>, <mat-option>
    MatButtonModule,     // <button mat-button>, <button mat-raised-button> etc
    MatIconModule,
    MatCheckboxModule,
    MatPaginatorModule,
   ToastrModule.forRoot({
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  closeButton: false,        // removed close icon
  progressBar: false,        // optional: clean look
  timeOut: 3000              // auto disappear
}),

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    // NgxGoogleAnalyticsModule.forRoot(environment.trackAnalyticID),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgbModule], providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
