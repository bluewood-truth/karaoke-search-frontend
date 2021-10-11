import {Button} from 'components/basic';
import Input from 'components/basic/input';
import Select from 'components/basic/select';
import Stack from 'components/basic/stack';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import parseQuery from 'utils/parseQuery';

const karaokeList = [
  {value: 'TJ', label: 'TJ'},
  {value: 'KY', label: 'KY'},
];

const searchByList = [
  {value: 'TITLE', label: '곡 제목'},
  {value: 'SINGER', label: '가수'},
  {value: 'NUMBER', label: '곡 번호'},
];

const SearchForm = () => {
  const history = useHistory();
  const [karaoke, setKaraoke] = useState('');
  const [searchBy, setSearchBy] = useState('');
  const [keyword, setKeyword] = useState('');

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = {
      karaoke: karaoke,
      searchBy: searchBy,
      keyWord: keyword,
    };

    const queryString = new URLSearchParams(query).toString();
    history.push(`/searchResult?${queryString}`);
  };

  useEffect(() => {
    if (history.location.pathname === '/searchResult') {
      const query = parseQuery(history.location.search);
      setKaraoke(query.karaoke ? query.karaoke : karaokeList[0].value);
      setSearchBy(query.searchBy ? query.searchBy : searchByList[0].value);
      setKeyword(query.keyWord ? query.keyWord : '');
    }
  }, [history.location]);

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={submit}>
      <Stack className='searchForm' direction='horizontal' spacing='xs'>
        <Select
          id='karaoke'
          title='karaoke'
          name='karaoke'
          variant='filled'
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setKaraoke(e.target.value);
          }}
          value={karaoke}
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
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSearchBy(e.target.value);
          }}
          value={searchBy}
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
          value={keyword}
        />
        <Button type='submit'>검색</Button>
      </Stack>
    </form>
  );
};

export default SearchForm;
