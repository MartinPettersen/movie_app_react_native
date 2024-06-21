import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { Genre, MovieType } from '../utils/types';

export const useGetDiscoverMovies = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  console.log("Discover")
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${THEMOVIEDB_KEY}`;
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
