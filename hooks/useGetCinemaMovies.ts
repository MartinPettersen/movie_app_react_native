import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { Genre, MovieType } from '../utils/types';

export const useGetCinemaMovies = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  console.log("Cinema")
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return movies;
};
