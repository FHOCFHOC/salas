import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private baseUrl = 'http://localhost:8087/api/v1/salas';

  constructor(private http: HttpClient) { }

  getSala(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSala(sala: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, sala);
  }

  updateSala(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSala(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSalasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
