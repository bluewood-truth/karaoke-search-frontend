import {Button} from 'components/basic';
import PageWrapper from 'components/PageWrapper';
import SongTable from 'components/SongTable';
import useSearchResult from 'hooks/useSearchResult';

const SearchResult = () => {
  const {isLastPage, isLoading, songList, fetchMore} = useSearchResult();

  return (
    <PageWrapper>
      <SongTable songList={songList} isLoading={isLoading} />
      {!isLoading && !isLastPage && <Button onClick={fetchMore}>더보기</Button>}
    </PageWrapper>
  );
};

export default SearchResult;
