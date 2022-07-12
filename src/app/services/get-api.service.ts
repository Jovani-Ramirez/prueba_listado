import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IData } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  public url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.API_URL
  }

  getList(): Observable<IData> {
    return this.http.get<IData>(`${this.url}`);
  }
}
