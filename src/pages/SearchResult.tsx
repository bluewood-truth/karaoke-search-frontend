import PageWrapper from 'components/PageWrapper';
import {Link} from 'react-router-dom';

const SearchResult = () => {
  return (
    <PageWrapper>
      This is search result.<Link to={'/'}>home</Link>
    </PageWrapper>
  );
};

export default SearchResult;
