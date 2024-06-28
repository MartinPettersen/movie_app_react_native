import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { ActorType, Genre, MovieType } from '../utils/types';

export const useGetMovieRecommendations = (movieId: number) => {
  const [movies, setMovies] = useState<MovieType[] | null>([]);


  
  useEffect(() => {
    const fetchMovieRecommendations = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1&api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        if (data.results) {
          setMovies(data.results);
        } else {
          setMovies(null);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieRecommendations();
  }, []);

  return movies;
};
