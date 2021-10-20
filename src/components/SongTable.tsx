import React from 'react';
import {Song} from 'types/domain';
import { Box } from './basic';
import Flex from './basic/flex';
import Stack from './basic/stack';
import Loading from './Loading';

const SongTableRow = (props: {song: Song}) => {
  const {song} = props;
  return (
    <Flex className='tableRow' width='xl'>
      <Box flex='1'>{song.karaoke}</Box>
      <Box flex='1'>{song.songNumber}</Box>
      <Box flex='5'>{song.title}</Box>
      <Box flex='3'>{song.singer}</Box>
    </Flex>
  );
};

const SongTable = (props: {songList: Song[]; isLoading: boolean}) => {
  const {songList, isLoading} = props;
  return (
    <React.Fragment>
      <Flex className='tableHeader' width='xl' fontWeight='bold'>
        <Box flex='1'>노래방</Box>
        <Box flex='1'>곡 번호</Box>
        <Box flex='5'>곡 제목</Box>
        <Box flex='3'>가수</Box>
      </Flex>
      <Stack>
        {songList.map((song, index) => (
          <SongTableRow song={song} key={index} />
        ))}
      </Stack>
      {isLoading && <Loading />}
    </React.Fragment>
  );
};

export default SongTable;
