import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private readonly http = inject(HttpClient);
  constructor(){
    this.loadTrendingGif()
  }

  loadTrendingGif(){
   this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {params: {
    api_key: environment.giphyKey,
    limit: 20
    }}).subscribe(gifResponse=>{
      // console.log({gifResponse});
      const {data} = gifResponse
      const gifs = GifMapper.gifItemMapperArray(data)
      console.log(gifs);


    })
  }
}
