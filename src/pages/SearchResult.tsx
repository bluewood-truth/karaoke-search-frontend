import {Box, Button, Flex} from 'components/basic';
import PageWrapper from 'components/PageWrapper';
import SearchResultHeading from 'components/searchResult/SearchResultHeader';
import SongTable from 'components/searchResult/SongTable';
import useSearchResult from 'hooks/useSearchResult';
import parseQuery from 'utils/parseQuery';

const FetchMoreButton = (props: {fetchMore: () => Promise<void>}) => {
  const {fetchMore} = props;
  return (
    <Flex justifyContent='center' paddingY='sm'>
      <Button onClick={fetchMore} fontSize='md' fontWeight='bold'>
        더보기
      </Button>
    </Flex>
  );
};

const SearchResult = () => {
  const {searchQuery, isLastPage, isLoading, songList, fetchMore} =
    useSearchResult();
  const keyword = parseQuery(searchQuery)['keyword'];

  return (
    <PageWrapper>
      <Box width='container' padding='2.5em'>
        <SearchResultHeading heading={`'${keyword}' 검색 결과`} />
        <SongTable songList={songList} isLoading={isLoading} />
        {!isLoading && !isLastPage && <FetchMoreButton fetchMore={fetchMore} />}
      </Box>
    </PageWrapper>
  );
};

export default SearchResult;
