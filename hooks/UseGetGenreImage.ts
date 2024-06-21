import genreImages from "../utils/genreImages";

export const useGetGenreImage = (name: string) => {
  const getGenreImage = (name: string) => {
    return genreImages[name.replace(/ /g, "_")];
  };

  return getGenreImage(name);
};
