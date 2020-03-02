import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){
    // tslint:disable-next-line: max-line-length
    const headers = new HttpHeaders({'Authorization': 'Bearer BQCFUAwUSDpLQo4SsCYNHBBxIfh9OUi2OGmxWllqRJlkdy9s83z9Dji4ud7qo6JK-zJIUEI56yLfVUSyERY'});
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtist(termino: string){
    // tslint:disable-next-line: max-line-length
    const headers = new HttpHeaders({'Authorization': 'Bearer BQCFUAwUSDpLQo4SsCYNHBBxIfh9OUi2OGmxWllqRJlkdy9s83z9Dji4ud7qo6JK-zJIUEI56yLfVUSyERY'});
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, { headers });
  }
}
