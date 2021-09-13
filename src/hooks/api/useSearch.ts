import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {SearchQuery, Song} from 'types/domain';

const BASE_URL = 'https://api.airtable.com/v0/appHMD03gIgaB6RFM/song_list';
const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;

axios.interceptors.request.use(async (config) => {
  if (!config.headers['Authorization']) {
    config.headers['Authorization'] = `Bearer ${AIRTABLE_API_KEY}`;
  }
  config.headers['Content-Type'] = 'application/json';

  return config;
});

const useSearch = (query: SearchQuery | null) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Song[]>([]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setData([]);
      const response = await axios.get(BASE_URL);
      setData(response.data.records.map((record: any) => record.fields));
    } catch (e: any) {
      console.log(e.message);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {isLoading, data};
};

export default useSearch;
