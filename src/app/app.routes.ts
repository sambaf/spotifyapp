import { RouterModule,Routes   } from '@angular/router';
import{NgModule}  from '@angular/core';


import {NavbarComponent}  from './components/navbar/navbar.component';
import {AboutComponent}  from './components/about/about.component';
import {SearchComponent}  from './components/search/search.component';
import {ArtistComponent}  from './components/artist/artist.component';
import {AlbumComponent}  from './components/album/album.component';




const appRoutes :Routes=[
{path:'', component:SearchComponent},
{path:'about', component:AboutComponent},
{path:'search', component:SearchComponent},
{path:'artist/:id', component:ArtistComponent},
{path:'album/:id', component:AlbumComponent}


];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRouter{}