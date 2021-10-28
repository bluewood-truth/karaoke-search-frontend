import {Box, Flex} from 'components/basic';
import isDarkMode from 'utils/isDarkMode';
import Logo from './Logo';
import SearchForm from './SearchForm';
import UserNav from './UserNav';

const NavigationBar = () => {
  return (
    <Flex
      className='navigationBar'
      position='relative'
      paddingX='20px'
      paddingY='16px'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      boxShadow={`0px 0px 15px rgba(0, 0, 0, ${isDarkMode() ? 0.75 : 0.25});`}
    >
      <Box position='absolute' zIndex='base'>
        <Flex width='container' justifyContent='space-between'>
          <Logo />
          <UserNav />
        </Flex>
      </Box>
      <Flex justifyContent='center' height='100%' zIndex='nav'>
        <SearchForm />
      </Flex>
    </Flex>
  );
};

export default NavigationBar;
