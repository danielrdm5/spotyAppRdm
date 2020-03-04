import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getQuery( query: string ){
    const authorization = 'Bearer BQD0A06y_eacuRPcXR0DSbSZBfncMgZ7S5JvvpQ5lyaTBFiJccTBRx7utj51Od7X7hrMvlM7hD2OKj4lM4U';
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({'Authorization': authorization});
    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items));
  }

  getArtists(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe( map( data => data['artists'].items));
  }

  getArtist(id: string){
    return this.getQuery(`artists/${ id }`);
  }
  
  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( data => data['tracks']));
  }
}
