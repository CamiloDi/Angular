import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist:any={};
  tracks:any[]=[];
  constructor(private activatedRoute:ActivatedRoute,
              public _spotify:SpotifyService) { }

  ngOnInit()
  {

    this.activatedRoute.params
                  .map(params=> params['id_artist'])
                  .subscribe(id_artist=>{
                    this._spotify.getArtist(id_artist)
                                 .subscribe(artist=>{
                                   this.artist=artist;
                                   console.log(this.artist);
                                            });
                            this._spotify.getTop(id_artist)
                                        .subscribe(tracks=>{
                                          this.tracks=tracks;
                                          console.log(this.tracks);
                                       });
                            });
  }

}
