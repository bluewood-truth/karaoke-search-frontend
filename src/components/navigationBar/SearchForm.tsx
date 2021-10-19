import {Button} from 'components/basic';
import Input from 'components/basic/input';
import Select from 'components/basic/select';
import Stack from 'components/basic/stack';
import useSearchForm from 'hooks/useSearchForm';

const SearchForm = () => {
  const {
    karaokeList,
    searchByList,
    submit,
    searchFormState,
    handleKaraoke,
    handleSearchBy,
    handleKeyword,
  } = useSearchForm();

  return (
    <form onSubmit={submit}>
      <Stack className='searchForm' direction='horizontal' spacing='xs'>
        <Select
          id='karaoke'
          title='karaoke'
          name='karaoke'
          variant='filled'
          onChange={handleKaraoke}
          value={searchFormState.karaoke}
        >
          {karaokeList.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </Select>
        <Select
          id='searchBy'
          title='searchBy'
          name='searchBy'
          variant='filled'
          onChange={handleSearchBy}
          value={searchFormState.searchBy}
        >
          {searchByList.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </Select>
        <Input
          id='keyword'
          name='keyword'
          variant='filled'
          maxLength={128}
          required
          onInvalid={(e: any) => {
            console.log(e);
          }}
          onChange={handleKeyword}
          value={searchFormState.keyword}
        />
        <Button type='submit'>검색</Button>
      </Stack>
    </form>
  );
};

export default SearchForm;
