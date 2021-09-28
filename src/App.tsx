import React, {useState, useCallback, useMemo} from 'react';

import GoogleMap from './components/Map';
import { Header } from './components/Header/Header';
import { Loading } from './components/Loading';

import { getLaunches } from './services/api-service';
import './App.css';

function App(): JSX.Element {
  const [startDate, setStartDate] = useState<string>(new Date().toISOString());
  const [endDate, setEndDate] = useState<string>(new Date(new Date().setMonth(new Date().getMonth()+3)).toISOString());
  const [launches, setLaunches] = useState<any>([]);

  const [mapLoading, setMapLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const dateRangeHandle = useCallback((start: Date, end: Date) => {
    setStartDate(start.toISOString());
    setEndDate(end.toISOString());
  }, [setStartDate, setEndDate]);

  useMemo(() => {
    const fetchLaunches = async() => {
      try {
        const fetchedLaunches = await getLaunches(startDate, endDate);
        setLaunches(fetchedLaunches);
      } catch(e: any) {
        setError(e);
      } finally {
        setMapLoading(false);
      }
    }

    setMapLoading(true);
    fetchLaunches();
  }, [startDate, endDate]);

  return (
    <div className="App">
      {error && error}
      {!error && <>
        <Header
          startDate={startDate}
          endDate={endDate}
          onDateRangeHandle={dateRangeHandle}
        />
        {!mapLoading ? <GoogleMap launches={launches} /> : <Loading />}
        </>
      }
    </div>
  );
}

export default App;
