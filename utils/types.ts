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
    ActorDetails: { actor: ActorType };
    GenreDetails: { genre: string, id: string };
};

export type Cast = {
    "adult": boolean,
    "credit_id": string,
    "department": string,
    "gender": number,
    "id": number,
    "job": string,
    "known_for_department": string,
    "name": string,
    "original_name": string,
    "popularity": number,
    "profile_path": boolean
}
export type ActorInfo = {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string | null;
};

export interface ActorType {
    adult: boolean;
    gender: number;
    id: number;
    known_for: MovieType[];
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
}