import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { Review } from '../utils/types';

export const useGetMovieReviews = (movieId: number) => {
  const [movieReviews, setMovieReviews] = useState<Review[] | null>(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        setMovieReviews(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return movieReviews;
};
