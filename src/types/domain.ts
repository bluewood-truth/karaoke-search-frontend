export interface SearchQuery {
  karaoke: string;
  category: string;
  keyword: string;
  page: number;
}

export interface Song {
  karaoke: string;
  songNumber: number;
  title: string;
  singer: string;
  isFavorite: boolean;
}

export interface LocalMyList {
  [key: string]: Song;
}