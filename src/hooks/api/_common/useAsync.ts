import {useCallback, useEffect, useReducer} from 'react';

type Action<D> =
  | {
      type: 'LOADING';
    }
  | {
      type: 'SUCCESS';
      data: D | null;
    }
  | {
      type: 'ERROR';
    };

interface State<D> {
  isLoading: boolean;
  isSuccess: boolean;
  data: D | null;
}

const reducer = <DataType>(
  state: State<DataType>,
  action: Action<DataType>
): State<DataType> => {
  switch (action.type) {
    case 'LOADING': {
      return {
        isLoading: true,
        isSuccess: false,
        data: null,
      };
    }
    case 'SUCCESS': {
      return {
        isLoading: false,
        isSuccess: true,
        data: action.data,
      };
    }
    case 'ERROR': {
      return {
        isLoading: false,
        isSuccess: false,
        data: null,
      };
    }
  }
};

type Reducer<S, A> = (state: S, action: A) => S;

const useAsync = <DataType>(
  callback: () => Promise<DataType>,
  deps?: React.DependencyList
) => {
  const [state, dispatch] = useReducer<
    Reducer<State<DataType>, Action<DataType>>
  >(reducer, {
    isLoading: false,
    isSuccess: false,
    data: null,
  });

  const fetch = useCallback(async () => {
    dispatch({type: 'LOADING'});
    try {
      const data = await callback();
      dispatch({type: 'SUCCESS', data: data});
    } catch (e) {
      console.error(e);
      dispatch({type: 'ERROR'});
    }
  }, [callback]);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
};

export default useAsync;
