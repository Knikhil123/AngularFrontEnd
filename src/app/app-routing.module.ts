import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { AddSongComponent } from './add-song/add-song.component';
import { AddArtistComponent } from './add-song/add-artist/add-artist.component';


const routes: Routes = [
  { path: '', component: SongsComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'addsong', component: AddSongComponent },
  { path: 'addartist', component: AddArtistComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
