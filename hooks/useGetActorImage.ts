import { useEffect, useState } from 'react';
import { THEMOVIEDB_KEY } from '@env';
import { Genre, MovieType } from '../utils/types';

export const useGetActorImage = (personId: number) => {
  const [actorImage, setActorImage] = useState<string | null>(null);

  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/person/${personId}/images?api_key=${THEMOVIEDB_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.profiles && data.profiles.length > 0) {
          setActorImage(data.profiles[0].file_path);
        } else {
          setActorImage(null);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  console.log("we return: " +actorImage)
  return actorImage;
};
