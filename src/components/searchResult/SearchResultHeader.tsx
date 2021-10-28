import {Box} from 'components/basic';
import {getMainColor} from 'components/basic/colors';

const SearchResultHeading = (props: {heading: string}) => {
  return (
    <Box
      color={getMainColor()[2]}
      fontSize='xl'
      fontWeight='extrabold'
      marginBottom='1.5rem'
    >
      {props.heading}
    </Box>
  );
};

export default SearchResultHeading;
