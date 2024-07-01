import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { MovieType } from '../utils/types';

export const useGetMovieRecommendations = (movieId: number) => {
  const [recommendedMovies, setRecommendedMovies] = useState<MovieType[] | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        setRecommendedMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecommendations();
  }, [movieId]);

  return recommendedMovies;
};
