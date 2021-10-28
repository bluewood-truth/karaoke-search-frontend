import {useEffect, useMemo, useState} from 'react';
import {Song} from 'types/domain';
import {getCurrentUser} from 'utils/auth/authService';
import LocalMyListService from 'utils/localMyList/LocalMyListService';

const useMyListGetter = () => {
  const isLoggedIn = useMemo(() => {
    return getCurrentUser() !== null;
  }, []);
  const [isLoading, setLoading] = useState(false);
  const [myList, setMyList] = useState<Song[]>([]);

  useEffect(() => {
    if (!isLoggedIn) {
      const localMyList = LocalMyListService.get();
      setMyList(Object.values(localMyList));
    }
  }, [isLoggedIn]);

  return {isLoading, myList};
};

export default useMyListGetter;
