import {Song} from 'types/domain';
import {Box} from './basic';
import Stack from './basic/stack';

const SongTable = (props: {songList: Song[]}) => {
  const {songList} = props;
  return (
    <Stack spacing='sm'>
      {songList.map((song, index) => (
        <Box key={index}>
          {song.songNumber} {song.karaoke} {song.title} {song.singer}
        </Box>
      ))}
    </Stack>
  );
};

export default SongTable;
