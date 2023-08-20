import { Global } from '@emotion/react';

import { useEffect, useState } from 'react';
import { api } from '@/shared/api';

import { globalStyles } from './App.style';

export function App() {
  const [animes, setAnimes] = useState<any[]>([]);

  const getAnime = async () => {
    try {
      const resp: { data: any[] } = await api.get('seasons/now').json();
      if (resp) {
        setAnimes(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <>
      <Global styles={globalStyles} />
      <h2>Hello</h2>
      {animes.map((anime) => (
        <div key={anime.title}>{anime.title}</div>
      ))}
    </>
  );
}
