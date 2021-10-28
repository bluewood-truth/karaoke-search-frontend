import {LocalMyList, Song} from 'types/domain';
import getSongKey from './getSongKey';

const MY_LIST = 'myList';

class LocalMyListService {
  get: () => LocalMyList = () => {
    const myList = localStorage.getItem(MY_LIST);
    if (myList !== null) {
      return JSON.parse(myList);
    }

    return {};
  };

  add = (song: Song) => {
    const key = getSongKey(song);
    const myList = this.get();
    song.isFavorite = true;
    myList[key] = song;
    localStorage.setItem(MY_LIST, JSON.stringify(myList));
  };

  remove = (song: Song) => {
    const key = getSongKey(song);
    const myList = this.get();
    song.isFavorite = false;
    delete myList[key];
    localStorage.setItem(MY_LIST, JSON.stringify(myList));
  };

  has = (song: Song) => {
    const key = getSongKey(song);
    const myList = this.get();
    return key in myList;
  };
}

export default new LocalMyListService();
