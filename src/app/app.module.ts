import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { GeneralModule } from './components/general/general.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule } from '@angular/material/dialog';
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
import { AuthInterceptor } from './interceptor/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],

  imports: [BrowserAnimationsModule,
    HomeModule,
    GeneralModule,
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

    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    // }),
    // NgxGoogleAnalyticsModule.forRoot(environment.trackAnalyticID),
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient],
    //   },
    // }),
    NgbModule], providers: [provideHttpClient(withInterceptorsFromDi()),{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }]
})
export class AppModule { }
