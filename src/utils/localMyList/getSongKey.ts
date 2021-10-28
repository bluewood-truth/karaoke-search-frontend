import {Song} from 'types/domain';

const getSongKey = (song: Song) => {
  return `${song.karaoke}_${song.songNumber}`;
};

export default getSongKey;
