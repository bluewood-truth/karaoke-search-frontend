import {useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import {Song} from 'types/domain';
import parseQuery from 'utils/parseQuery';

const SONG_PER_PAGE = 10;

const useMyListContainer = (inputMyList: Song[]) => {
  const [partOfMyList, setParOfMyList] = useState<Song[]>([]);
  const [page, setPage] = useState(1);
  const history = useHistory();

  const maxPage = Math.ceil(inputMyList.length / SONG_PER_PAGE);

  useEffect(() => {
    if (history.location.search !== '') {
      const query = parseQuery(history.location.search);
      if (query['page'] && !isNaN(parseInt(query['page']))) {
        let pageTmp = parseInt(query['page']);
        if (pageTmp > maxPage) pageTmp = maxPage;
        if (pageTmp < 1) pageTmp = 1;
        
        setPage(pageTmp);
      }
    }
  }, [history.location, maxPage]);

  useEffect(() => {
    setParOfMyList(
      inputMyList.slice((page - 1) * SONG_PER_PAGE, page * SONG_PER_PAGE)
    );
  }, [inputMyList, page]);

  return {partOfMyList, page, maxPage};
};

export default useMyListContainer;
