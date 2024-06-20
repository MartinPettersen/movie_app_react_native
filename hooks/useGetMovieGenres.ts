import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { Genre } from '../utils/types';

export const useGetMovieGenres = () => {
  const [movieGenres, setMovieGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchMovieGenres = async () => {
      try {
        const url = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        setMovieGenres(data.genres);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieGenres();
  }, []);

  return movieGenres;
};
