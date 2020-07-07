import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { 

  }
  public getusers() {
    return this.httpClient.get('https://randomuser.me/api?results=500');
  }
}
