import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artists: any[] = [];
  constructor(private spotifyServ: SpotifyService) { }
  
  search(termino: string){
    this.spotifyServ.getArtist(termino)
      .subscribe( (data:any) => 
        {
          this.artists = data.artists.items;
        });
  }

}
