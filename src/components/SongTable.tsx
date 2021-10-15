import React from 'react';
import {Song} from 'types/domain';
import {Box} from './basic';
import Stack from './basic/stack';
import Loading from './Loading';

const SongTable = (props: {songList: Song[]; isLoading: boolean}) => {
  const {songList, isLoading} = props;
  return (
    <React.Fragment>
      <Stack spacing='sm'>
        {songList.map((song, index) => (
          <Box key={index}>
            {song.songNumber} {song.karaoke} {song.title} {song.singer}
          </Box>
        ))}
      </Stack>
      {isLoading && <Loading />}
    </React.Fragment>
  );
};

export default SongTable;
