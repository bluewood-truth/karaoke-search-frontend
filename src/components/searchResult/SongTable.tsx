import React from 'react';
import {Song} from 'types/domain';
import {Box, Divider} from '../basic';
import {getMainColor} from 'components/basic/colors';
import Flex from '../basic/flex';
import Stack from '../basic/stack';
import Loading from '../Loading';
import IconButton from 'components/common/IconButton';

const widthRatio = {
  number: '120',
  title: '360',
  mylist: '160',
};

const SongTh = (props: {flex: string; children?: React.ReactNode}) => {
  const {flex, children} = props;
  return (
    <Flex
      flex={flex}
      justifyContent='center'
      alignItems='center'
      paddingY='sm'
      fontWeight='bold'
    >
      {children}
    </Flex>
  );
};

const SongTableHead = () => {
  return (
    <Box color={getMainColor()[4]}>
      <Divider width='2px' />
      <Flex className='tableHead'>
        <SongTh flex={widthRatio.number}>곡 번호</SongTh>
        <SongTh flex={widthRatio.title}>{'곡 제목 & 가수'}</SongTh>
        <SongTh flex={widthRatio.mylist}>마이리스트</SongTh>
      </Flex>
      <Divider width='2px' />
    </Box>
  );
};

const SongTableRow = (props: {song: Song}) => {
  const {song} = props;
  return (
    <Flex className='tableRow' paddingY='sm' hover={{backgroundColor: getMainColor()[1]}}>
      <Flex
        className='tdNumber'
        flex={widthRatio.number}
        justifyContent='center'
        alignItems='center'
        color={getMainColor()[4]}
        fontWeight='bold'
        letterSpacing='0'
      >{`${song.karaoke}_${song.songNumber}`}</Flex>
      <Stack
        className='tdTitle'
        flex={widthRatio.title}
        spacing='sm'
        justifyContent='center'
        alignItems='start'
        flexDirection='column'
      >
        <Box color={getMainColor()[4]} fontWeight='bold'>
          {song.title}
        </Box>
        <Box color={getMainColor()[3]} fontSize='xs'>
          {song.singer}
        </Box>
      </Stack>
      <Flex
        className='tdMyList'
        flex={widthRatio.mylist}
        justifyContent='center'
        alignItems='center'
      >
        <IconButton src='heart_empty' width='24px' height='20px' />
      </Flex>
    </Flex>
  );
};

const LoadingRow = (props: {isLoading: boolean}) => {
  const {isLoading} = props;

  if (!isLoading) {
    return null;
  }

  return (
    <Flex flexDirection='column'>
      <Divider color={getMainColor()[2]} />
      <Flex justifyContent='center' paddingY='md'>
        <Loading />
      </Flex>
    </Flex>
  );
};

const NoResultRow = () => {
  return (
    <Flex justifyContent='center' paddingY='lg'>
      결과가 없습니다.
    </Flex>
  );
};

const SongTable = (props: {songList: Song[]; isLoading: boolean}) => {
  const {songList, isLoading} = props;

  if (!isLoading && songList.length === 0) {
    return (
      <Box className='songTable' width='100%'>
        <SongTableHead />
        <NoResultRow />
      </Box>
    );
  }

  return (
    <Box className='songTable' width='100%'>
      <SongTableHead />
      <Stack>
        {songList.map((song, index) => (
          <React.Fragment>
            {index !== 0 && <Divider color={getMainColor()[2]} />}
            <SongTableRow song={song} key={index} />
          </React.Fragment>
        ))}
      </Stack>
      <LoadingRow isLoading={isLoading} />
      <Divider color={getMainColor()[4]} width='2px' />
    </Box>
  );
};

export default SongTable;
