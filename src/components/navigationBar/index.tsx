import {Box} from 'components/basic';
import Logo from './Logo';
import SearchForm from './SearchForm';

const NavigationBar = () => {
  return (
    <Box style={{display: 'flex'}}>
      <Logo />
      <SearchForm />
    </Box>
  );
};

export default NavigationBar;
