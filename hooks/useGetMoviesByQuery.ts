import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { MovieType } from '../utils/types';

export const useGetMoviesByQuery = (query: string) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const formattedQuery = query.replace(/\s+/g, '+');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const urlString = `https://api.themoviedb.org/3/search/movie?query=${formattedQuery}&api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(urlString);
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    if (formattedQuery) {
      fetchMovies();
    } else {
      setMovies([]);
    }
  }, [formattedQuery]);

  return movies;
};
