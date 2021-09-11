import PageWrapper from 'components/PageWrapper';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <PageWrapper>
      This is home.
      <Link to={'/searchResult'}>search</Link>
    </PageWrapper>
  );
};

export default Home;
