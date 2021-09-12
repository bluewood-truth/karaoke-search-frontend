import { Box, Button } from 'components/basic';
import Input from 'components/basic/input';

const SearchForm = () => {
  return (
    <Box style={{display: 'flex'}}>
      <Input />
      <Button>검색</Button>
    </Box>
  );
};

export default SearchForm;
