import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Song} from 'types/domain';

const SONG_COUNT_PER_PAGE = 15;
const SEARCH_API_URL = process.env.REACT_APP_SEARCH_API_URL;

const useSearchResult = () => {
  const [songList, setSongList] = useState<Song[]>([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const initialize = useCallback(() => {
    setSongList([]);
    setIsLastPage(false);
    setPage(1);
  }, []);

  const fetch = useCallback(async (searchQuery: string, page: number) => {
    setLoading(true);
    const data = await axios
      .get(`${SEARCH_API_URL}${searchQuery}&page=${page}`)
      .then((res) => res.data);

    setIsLastPage(data.length < SONG_COUNT_PER_PAGE);
    setLoading(false);
    return data;
  }, []);

  const fetchMore = async () => {
    const data = await fetch(searchQuery, page + 1);
    setSongList(songList.concat(data));
    setPage(page + 1);
  };

  useEffect(() => {
    if (history.location.search !== '') {
      setSearchQuery(`${history.location.search}`);
    }
  }, [history.location, setSearchQuery]);

  useEffect(() => {
    if (searchQuery !== '') {
      initialize();
      fetch(searchQuery, 1).then(setSongList);
    }
  }, [fetch, initialize, searchQuery, setSongList]);

  return {
    searchQuery,
    isLastPage,
    isLoading,
    songList,
    fetchMore,
  };
};

export default useSearchResult;
