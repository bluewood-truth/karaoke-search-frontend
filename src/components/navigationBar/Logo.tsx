import {Box} from 'components/basic';
import useSearchForm from 'hooks/useSearchForm';
import {Link} from 'react-router-dom';

const Logo = () => {
  const {initialize} = useSearchForm();

  return (
    <Link to='/' onClick={initialize}>
      <Box>Logo</Box>
    </Link>
  );
};

export default Logo;
