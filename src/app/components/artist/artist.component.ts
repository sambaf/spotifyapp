import { Component , OnInit} from '@angular/core';
import {SpotifyService}  from '../../services/spotify.service';
import {Artist}  from '../../../Artist';
import {Album}  from '../../../Album';
import {ActivatedRoute}  from '@angular/router';



@Component({

  moduleId:module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html'
})
export class  ArtistComponent  implements OnInit { 

    private id:string;
    private artist :Artist[];
    private albums :Album[];

    constructor(private _sportifyService: SpotifyService,private _route:ActivatedRoute){

    }
    ngOnInit(){
        this._route.params.map(params=>params['id'])
        .subscribe((id)=>{
          this._sportifyService.getArtist(id).subscribe(artist=>{
              this.artist=artist;
          })
          //get albums
          this._sportifyService.getAlbums(id).subscribe(albums=>{
              this.albums=albums.items;
          })
        })
    }
 }