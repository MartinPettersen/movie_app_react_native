import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { ActorType, Genre, MovieType } from '../utils/types';

export const useGetMoviesByActor = (personId: number) => {
  const [movies, setMovies] = useState<MovieType[] | null>([]);


  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/person/${personId}/movie_credits?language=en-US&api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.cast) {
          setMovies(data.cast);
        } else {
          setMovies(null);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return movies;
};
