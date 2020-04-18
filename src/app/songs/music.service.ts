import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from './TopSongs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
   url: string= "http://localhost:8080/topSongs"
  constructor(private http: HttpClient ) { }

     getMusic():Observable<Music>{
     return this.http.get<Music>(this.url)

    
  }
}


