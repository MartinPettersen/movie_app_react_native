import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { ActorType, MovieType } from '../utils/types';

export const useGetActorsByQuery = (query: string) => {
  const [actors, setActors] = useState<ActorType[]>([]);
  const formattedQuery = query.replace(/\s+/g, '+');

  useEffect(() => {
    const fetchActors = async () => {
      try {
        
        const urlString = `https://api.themoviedb.org/3/search/person?query=${formattedQuery}&api_key=${THEMOVIEDB_KEY}`;

//        const urlString = `https://api.themoviedb.org/3/search/movie?query=${formattedQuery}&api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(urlString);
        const data = await res.json();
        setActors(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    if (formattedQuery) {
      fetchActors();
    } else {
      setActors([]);
    }
  }, [formattedQuery]);

  return actors;
};
