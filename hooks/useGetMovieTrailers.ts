import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { ActorType, Genre, MovieDetails, MovieTrailer, MovieType } from '../utils/types';

export const useGetMovieTrailers = (movieId: number) => {
  const [movieTrailers, setMovieTrailers] = useState<MovieTrailer[] | null>();


  
  useEffect(() => {
    const fetchMovieTrailers = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data) {
          setMovieTrailers(data.results);
        } else {
          setMovieTrailers(null);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieTrailers();
  }, []);

  return movieTrailers;
};
