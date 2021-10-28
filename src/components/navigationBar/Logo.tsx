import SvgImage from 'components/common/SvgImage';
import useSearchForm from 'hooks/useSearchForm';
import {Link} from 'react-router-dom';

const Logo = () => {
  const {initialize} = useSearchForm();

  return (
    <Link to='/' onClick={initialize} style={{lineHeight: 0}}>
      <SvgImage src='logo' width='95px' height='28px' />
    </Link>
  );
};

export default Logo;
