import { Component , OnInit} from '@angular/core';
import {SpotifyService}  from '../../services/spotify.service';
import {Album}  from '../../../Album';
import {ActivatedRoute}  from '@angular/router';

@Component({

  moduleId:module.id,
  selector: 'album',
  templateUrl: 'album.component.html'
})
export class  AlbumComponent implements  OnInit{ 


    private id:string;
    private album :Album[];

    constructor(private _sportifyService: SpotifyService,private _route:ActivatedRoute){

    }

      ngOnInit(){
        this._route.params.map(params=>params['id'])
        .subscribe((id)=>{
          this._sportifyService.getAlbum(id).subscribe(album=>{
              this.album=album;
          })
        
        })
    }
 }