import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { Genre, MovieType } from '../utils/types';



export const useGetMoviesMoviesWithGenre = (id: string) => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${THEMOVIEDB_KEY}&with_genres=${id}`;
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return movies;
};
