import axios from 'axios';
import {useMemo} from 'react';
import {SearchQuery, Song} from 'types/domain';
import useAsync from './_common/useAsync';

const BASE_URL = 'http://34.64.87.191:8080/api/search';

axios.interceptors.request.use(async (config) => {
  config.headers['Content-Type'] = 'application/json';
  return config;
});

const useSearch = (query: SearchQuery) => {
  const {isLoading, data, isSuccess} = useAsync<Song[]>(() => {
    return axios.get<Song[]>(BASE_URL, {params: query}).then((res) => res.data);
  }, []);

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
