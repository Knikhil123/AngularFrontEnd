import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AddsongService {

  url: string= "http://localhost:8080/aname"
  songUrl:string="http://localhost:8080/sname"
  
  constructor(private http: HttpClient ) { }


  getNames():Observable<String>{
    return this.http.get<String>(this.url)
  }
       postData(formData:any):Observable<any>{
       return this.http.post(this.songUrl,formData,{responseType:'text'})
    }
    
  
}
