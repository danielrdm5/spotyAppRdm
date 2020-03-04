import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;
  error = false;
  mensajeError = '';

  constructor( private spotifyServ: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.spotifyServ.getNewReleases()
    .subscribe( (data: any) => {
        this.newReleases = data;
        this.loading = false;
      }, (errorServicio) =>
      {
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
        this.loading = false;
      }
    );
    
  }

  ngOnInit(): void {
  }

}
