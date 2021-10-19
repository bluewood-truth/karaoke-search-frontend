import {useCallback, useEffect, useReducer} from 'react';
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

type Action =
  | {type: 'INITIALIZE'}
  | {type: 'ALL'; data: State}
  | {
      type: 'KARAOKE' | 'SEARCH_BY' | 'KEYWORD';
      data: string;
    };

interface State {
  karaoke: string;
  searchBy: string;
  keyword: string;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INITIALIZE': {
      return {
        karaoke: karaokeList[0].value,
        searchBy: searchByList[0].value,
        keyword: '',
      };
    }
    case 'ALL': {
      return action.data;
    }
    case 'KARAOKE': {
      return {
        ...state,
        karaoke: action.data,
      };
    }
    case 'SEARCH_BY': {
      return {
        ...state,
        searchBy: action.data,
      };
    }
    case 'KEYWORD': {
      return {
        ...state,
        keyword: action.data,
      };
    }
  }
};

const useSearchForm = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    karaoke: karaokeList[0].value,
    searchBy: searchByList[0].value,
    keyword: '',
  });

  const initialize = () => {
    dispatch({ type: 'INITIALIZE' });
    console.log('initialize');
  };

  const updateForm = useCallback((searchQuery: string) => {
    const query = parseQuery(searchQuery);
    if (
      Object.keys(query).length !== 0 &&
      !Object.values(query).some((item) => item === '')
    ) {
      dispatch({
        type: 'ALL',
        data: {
          karaoke: query.karaoke!,
          searchBy: query.searchBy!,
          keyword: query.keyword!,
        },
      });
    }
  }, []);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = {
      ...state,
    };

    const queryString = new URLSearchParams(query).toString();
    history.push(`/searchResult?${queryString}`);
  };

  const handleKaraoke = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({type: 'KARAOKE', data: e.target.value});
  };

  const handleSearchBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({type: 'SEARCH_BY', data: e.target.value});
  };

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type: 'KEYWORD', data: e.target.value});
  };

  useEffect(() => {
    const query = parseQuery(history.location.search);
    if (
      Object.keys(query).length === 0 ||
      Object.values(query).some((item) => !item)
    ) {
      dispatch({type: 'INITIALIZE'});
    } else {
      updateForm(history.location.search);
    }
  }, [history.location, updateForm]);

  return {
    karaokeList,
    searchByList,
    initialize,
    submit,
    searchFormState: state,
    handleKaraoke,
    handleSearchBy,
    handleKeyword,
  };
};

export default useSearchForm;
