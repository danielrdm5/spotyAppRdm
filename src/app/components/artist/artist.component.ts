import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any = {};
  loading: boolean;

  constructor(private router: ActivatedRoute,
              private spotifyServ: SpotifyService) { 
    this.router.params.subscribe( params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist( id: string ){
    this.loading = true;
    this.spotifyServ.getArtist(id)
      .subscribe( artist => {
        this.artist = artist;
        this.loading = false;
      } );
  }
  
  getTopTracks( id: string){
    this.loading = true;
    this.spotifyServ.getTopTracks(id)
      .subscribe( topTracks => {
        this.topTracks = topTracks;
        console.log(this.topTracks);
        this.loading = false;
      } );
  }
}
