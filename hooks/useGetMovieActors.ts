import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { ActorInfo, MovieType } from '../utils/types';
import * as FileSystem from 'expo-file-system';

export const useGetMovieActors = (query: number) => {
  const [movies, setMovies] = useState<ActorInfo[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const urlString = `https://api.themoviedb.org/3/movie/${query}/credits?api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(urlString);
        const data = await res.json();
        
        
        setMovies(data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    if (query) {
      fetchMovies();
    } else {
      setMovies([]);
    }
  }, []);

  return movies;
};
