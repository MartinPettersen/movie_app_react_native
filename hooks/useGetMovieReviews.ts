import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { ActorType, Genre, MovieType, Review } from '../utils/types';

export const useGetMovieReviews = (movieId: number) => {
  const [movieReviews, setMovieReviews] = useState<Review[] | null>([]);


  
  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results)
        if (data) {
          setMovieReviews(data.results);
        } else {
          setMovieReviews(null);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReviews();
  }, []);

  return movieReviews;
};
