import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const URL ="http://localhost:3000/demo/api/admin";
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { } 
  
  getHeaderWithToken() {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json')
    return headers;
  }

  post(obj:any) {
    console.log({obj})
    // return data.data;
    return this.http.post(URL + '/userlist', obj, { headers: this.getHeaderWithToken() })
      .pipe((res) => 
      {
        return res
      });
  }


}
