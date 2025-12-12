import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  // Make sure backendBaseUrl is like: http://127.0.0.1:8000  (no trailing slash)
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
    const body = new HttpParams()
      .set('username', email)
      .set('password', password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(`${this.apiUrl}/auth/login`, body.toString(), { headers })
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
    // POST /posts  (protected if you decide so on backend)
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/auth/forgot/request`, post, { headers });
  }

    resetPassword(post: any): Observable<any> {
    // POST /posts  (protected if you decide so on backend)
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/auth/forgot/reset`, post, { headers });
  }

  // ========= POSTS =========

  createPost(post: any): Observable<any> {
    // POST /posts  (protected if you decide so on backend)
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/posts`, post, { headers });
  }
   listGetPostsWithoutToken(): Observable<any> {
    // GET /posts
    return this.http.get(`${this.apiUrl}/get/posts`);
  }

  listPosts(): Observable<any> {
    // GET /posts
     const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/posts`, { headers });
  }
  listOfApplications(): Observable<any> {
    // GET /posts
    return this.http.get(`${this.apiUrl}/applications`);
  }

  getPost(id: number): Observable<any> {
    // GET /posts/{id}
     const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/posts/${id}`, { headers });
  }

  updatePost(id: number, post: any): Observable<any> {
    // PUT /posts/{id}  (requires Bearer token on backend)
    const headers = this.getAuthHeaders();
    return this.http.put(`${this.apiUrl}/posts/${id}`, post, { headers });
  }

  deletePost(id: number): Observable<any> {
    // DELETE /posts/{id}  (requires Bearer token on backend)
    const headers = this.getAuthHeaders();
    return this.http.delete(`${this.apiUrl}/posts/${id}`, { headers });
  }

  // ========= CONTACT (requires token in backend) =========

  createContact(contact: any): Observable<any> {
    // POST /contact  (your FastAPI requires current_user)
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/contact`, contact, { headers });
  }

  // ========= APPLY JOB (multipart/form-data) =========


  applyForJob(body: {
    name: string;
    email: string;
    phone: string;
    post_id: number;
    resume?: any;
    notes?: string;
    body: string;
  }): Observable<any> {
    const formData = new FormData();
    formData.append('name', body.name);
    formData.append('email', body.email);
    formData.append('phone', body.phone);
    formData.append('post_id', body.post_id.toString());
    formData.append('body', body.body);
    if (body.resume) {
      formData.append('resume', body.resume);
    }

    if (body.notes) {
      formData.append('notes', body.notes);
    }

    return this.http.post(`${this.apiUrl}/apply`, formData);
  }

  applyJob(data: any): Observable<any> {
    return this.http.post(this.apiUrl + "/apply", data);
  }
  
  downloadResume(applicationId: number) {
  return this.http.get(
    `${this.apiUrl}/applications/${applicationId}/resume`,
    {
      responseType: 'blob',      // important
      observe: 'response'        // to read filename from headers later
    }
  );
}
}
