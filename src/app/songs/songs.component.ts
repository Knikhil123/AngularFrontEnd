import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  displayedColumns: string[] = ['No.','Artwork','Song Name','Date Of Release','Artist Name','Rate'];
  displayedColumns1: string[] = ['Artist Name','Date Of Birth','Song Name'];
  top:any;
  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.getAllData();
    // this.postAllData();
  
  }
  getAllData(){
    return this.musicService.getMusic().subscribe(
      result=>{
        this.top=result;
        console.log(this.top);
      },
      error=>{
        console.log(error)
      }
      
    )
  }

}
