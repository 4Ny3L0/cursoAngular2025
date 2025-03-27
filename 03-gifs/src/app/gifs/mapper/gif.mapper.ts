import { Gif } from '../interfaces/gif.interface';
import type { GifItem } from '../interfaces/giphy.interfaces';

export class GifMapper {
  static gifItemMapper(gifItem: GifItem): Gif {
    return {
      id: gifItem.id,
      title: gifItem.title,
      url: gifItem.images.original.url,
    };
  }

  static gifItemMapperArray(gifItems: GifItem[]): Gif[] {
    return gifItems.map(this.gifItemMapper)
  }
}
