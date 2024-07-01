import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { MovieType } from '../utils/types';

export const useGetSimilarMovies = (movieId: number) => {
  const [similarMovies, setSimilarMovies] = useState<MovieType[] | null>(null);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        setSimilarMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSimilarMovies();
  }, [movieId]);

  return similarMovies;
};
