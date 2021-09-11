import {useEffect} from 'react';
import {useHistory} from 'react-router';

const Error404 = () => {
  const history = useHistory();
  useEffect(() => {
    history.push('/');
  }, [history]);

  return null;
};

export default Error404;
