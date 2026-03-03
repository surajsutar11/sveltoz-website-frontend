import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = environment.backendBaseUrl.replace(/\/+$/, '');

  constructor(private http: HttpClient) { }

  // ========= AUTH HELPERS =========

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  // ========= AUTH API =========

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, {
      email,
      password
    });
  }

  login(email: string, password: string): Observable<any> {
    // const body = new HttpParams()
    //   .set('username', email)
    //   .set('password', password);
    const body ={
      email: email,
      password: password
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(`${this.apiUrl}/auth/login`, body, { headers })
      .pipe(
        tap((res: any) => {
          const token = res?.data?.access_token;
          if (token) {
            localStorage.setItem('token', token);
          }
        })
      );
  }

  forgetPassword(post: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/auth/forgot/request`, post, { headers });
  }

    resetPassword(post: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/auth/forgot/reset`, post, { headers });
  }

  createPost(post: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/posts`, post, { headers });
  }
   listGetPostsWithoutToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get/posts`);
  }

  listPosts(): Observable<any> {
     const headers = this.getAuthHeaders();
     console.log("Fetching posts with headers:", headers);
    return this.http.get(`${this.apiUrl}/posts`, { headers });
  }
  listOfApplications(): Observable<any> {
     const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/applications`,{ headers });
  }

  getPost(id: number): Observable<any> {
     const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/posts/${id}`, { headers });
  }

  updatePost(id: number, post: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/posts/${id}`, post, { headers });
  }

  deletePost(id: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/posts/${id}/delete`,  { headers });
  }

  createContact(contact: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/contact`, contact, { headers });
  }

  applyJob(data: any): Observable<any> {
    return this.http.post(this.apiUrl + "/apply", data);
  }
  
  downloadResume(applicationId: number) {
  return this.http.get(
    `${this.apiUrl}/applications/${applicationId}/resume`,
    {
      responseType: 'blob',     
      observe: 'response' 
    }
  );
}
}
