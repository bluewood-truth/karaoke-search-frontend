import {Box, Button, Flex} from 'components/basic';
import PageWrapper from 'components/PageWrapper';
import SearchResultHeading from 'components/searchResult/SearchResultHeader';
import SongTable from 'components/searchResult/SongTable';
import useMyListContainer from 'hooks/useMyListContainer';
import useMyListGetter from 'hooks/useMyListGetter';
import {useHistory} from 'react-router';

const PageNavigation = (props: {page: number; maxPage: number}) => {
  const {page, maxPage} = props;
  const history = useHistory();

  const pageDown = () => {
    if (page === 1) {
      return;
    }

    history.push(`/myList?page=${page - 1}`);
  };

  const pageUp = () => {
    if (page === maxPage) {
      return;
    }

    history.push(`/myList?page=${page + 1}`);
  };

  return (
    <Flex justifyContent='center' paddingY='md'>
      <Button className='pageDown' disabled={page <= 1} onClick={pageDown}>
        ◀
      </Button>
      <Box>{`${page} / ${maxPage}`}</Box>
      <Button className='pageUp' disabled={page >= maxPage} onClick={pageUp}>
        ▶
      </Button>
    </Flex>
  );
};

const MyList = () => {
  const {isLoading, myList} = useMyListGetter();
  const {page, maxPage, partOfMyList} = useMyListContainer(myList);

  return (
    <PageWrapper>
      <Box width='container' padding='2.5em'>
        <SearchResultHeading heading={`마이리스트`} />
        <SongTable songList={partOfMyList} isLoading={isLoading} />
        <PageNavigation page={page} maxPage={maxPage} />
      </Box>
    </PageWrapper>
  );
};

export default MyList;
