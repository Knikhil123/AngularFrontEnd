import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddartistService {
  artisturl: string= "http://localhost:8080/addname"

  constructor(private http: HttpClient ) { }

  postName(formData:any):Observable<any>{
    return this.http.post(this.artisturl,formData,{responseType:'text'})
 }

}
