import { Component } from '@angular/core';
import {SpotifyService}  from './services/spotify.service';
import {ArtistComponent}  from './components/artist/artist.component';
import {AlbumComponent}  from './components/album/album.component';


@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[SpotifyService]
})
export class AppComponent  {  }
