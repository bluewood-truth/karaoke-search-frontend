import {Song} from 'types/domain';
import LocalMyListService from './LocalMyListService';

const checkIsOnLocalMyList = (data: Song[]) => {
  const myList = LocalMyListService.get();
  if (myList === null || Object.keys(myList).length === 0) {
    return;
  }

  data.forEach((song, index, array) => {
    if (LocalMyListService.has(song)) {
      array[index].isFavorite = true;
    }
  });
};

export default checkIsOnLocalMyList;
