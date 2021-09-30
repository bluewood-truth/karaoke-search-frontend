import {Box} from 'components/basic';
import PageWrapper from 'components/PageWrapper';
import useSearch from 'hooks/api/useSearch';
import {useHistory} from 'react-router';
import {SearchQuery} from 'types/domain';
import parseQuery from 'utils/parseQuery';

const SearchResult = () => {
  const history = useHistory();
  const query = parseQuery(history.location.search) as SearchQuery;
  const {isLoading, data} = useSearch(query);

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <PageWrapper>
      {data.map((item, index) => (
        <Box key={index}>
          {item.songNumber} {item.karaoke} {item.title} {item.singer}
        </Box>
      ))}
      <Box style={{display: 'block'}}></Box>
    </PageWrapper>
  );
};

export default SearchResult;
