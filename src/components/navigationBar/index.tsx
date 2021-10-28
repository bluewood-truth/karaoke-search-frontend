import {Box, Flex, getMainColor} from 'components/basic';
import Logo from './Logo';
import SearchForm from './SearchForm';
import UserNav from './UserNav';

const NavigationBar = () => {
  return (
    <Flex
      paddingX='20px'
      paddingY='16px'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      boxShadow='0px 0px 15px rgba(0, 0, 0, 0.25);'
      backgroundColor={getMainColor()[0]}
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
