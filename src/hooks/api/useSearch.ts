import axios from 'axios';
import {useMemo} from 'react';
import {Song} from 'types/domain';
import useAsync from './_common/useAsync';

const SEARCH_API_URL = `${process.env.REACT_APP_SEARCH_API_URL}`;

axios.interceptors.request.use(async (config) => {
  config.headers['Content-Type'] = 'application/json';
  return config;
});

const useSearch = (searchQuery: string, page: number) => {
  const {isLoading, data, isSuccess} = useAsync<Song[]>(() => {
    return axios
      .get<Song[]>(`${SEARCH_API_URL}${searchQuery}&page=${page}`)
      .then((res) => res.data);
  }, [searchQuery, page]);

  const searchResult = useMemo(() => {
    if (isSuccess) {
      return data as Song[];
    } else {
      return [];
    }
  }, [isSuccess, data]);

  return {isLoading, searchResult};
};

export default useSearch;
