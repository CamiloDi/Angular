import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any[] = [];
  urlSpotify:string='https://api.spotify.com/v1/';
  token:string='BQAslu81L1alAPT3p6ZuN0OXYejsNQcyLVlXQIwzA3TtW01_atGjeOTX0F7DWk6sxNhHOVdZtvJ1R5qpS8s';
  tracks:any[] = [];

  constructor(public _http:HttpClient) {
    console.log("service spotify is ready!");
    //this.getToken();
  }

  private getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      'authorization':`Bearer ${this.token}`
    });

    return headers;

  }

  getTop(id_artist:string)  {
    let url=`${this.urlSpotify}artists/${id_artist}/top-tracks?country=US`;
    let headers=this.getHeaders();

    return this._http.get(url,{ headers})
                      .map((resp:any)=>{
                        this.tracks =resp.tracks;
                        return this.tracks;
                      });
  }

  getArtist(id_artist:string){
    let url=`${this.urlSpotify}artists/${id_artist}`;
    let headers=this.getHeaders();

    return this._http.get(url,{ headers});

  }

  getArtists(termino:string){

    let url=`${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;
    let headers=this.getHeaders();

    return this._http.get(url,{headers})
                      .map( (resp:any)=>{
                        this.artists =resp.artists.items;
                        return this.artists;
                      });
  }

  getToken(){
    let url="https://accounts.spotify.com/api/token";
    let body={
    grant_type:"client_credentials",
    client_id:"f7b90478081542c7bff5b2258f1eb78c",
    client_secret:"05ccc9b2bdf14d9395f90c5500c578f2"
    };
     let headers= new HttpHeaders();//({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Origin', '*');


    this._http.post(url,body,{headers}).subscribe(resp=>{
      console.log(resp);
    })

    return "hola";
  }

}
