import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { ActorType, Genre, MovieDetails, MovieType } from '../utils/types';

export const useGetMoviesDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>();


  
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data) {
          setMovieDetails(data);
        } else {
          setMovieDetails(null);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, []);

  return movieDetails;
};
