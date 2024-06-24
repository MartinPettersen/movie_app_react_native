export interface Genre {
    id: number;
    name: string;
}

export interface GenresList {
    genres: Genre[];
}
export interface MovieType {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type RootStackParamList = {
    Home: undefined;
    MovieDetails: { movie: MovieType };
    Genre: {genre: string};
};