import {Flex} from 'components/basic';
import Input from 'components/basic/input';
import Select from 'components/basic/select';
import Stack from 'components/basic/stack';
import IconButton from 'components/common/IconButton';
import UnderlineBox from 'components/common/UnderlineBox';
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
      <Stack className='searchForm' direction='horizontal' spacing='sm'>
        <UnderlineBox>
          <Select
            id='karaoke'
            title='karaoke'
            name='karaoke'
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
        </UnderlineBox>
        <UnderlineBox>
          <Select
            id='searchBy'
            title='searchBy'
            name='searchBy'
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
        </UnderlineBox>
        <UnderlineBox>
          <Flex>
            <Input
              id='keyword'
              name='keyword'
              placeholder='검색어를 입력해주세요.'
              maxLength={128}
              required
              onInvalid={(e: any) => {
                console.log(e);
              }}
              onChange={handleKeyword}
              value={searchFormState.keyword}
            />
            <IconButton
              type='submit'
              src='icon_mike'
              width='20px'
              height='20px'
            />
          </Flex>
        </UnderlineBox>
      </Stack>
    </form>
  );
};

export default SearchForm;
