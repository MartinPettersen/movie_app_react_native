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
    Trailer: { trailerId: string };

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

export interface Collection {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: Collection | null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type MovieTrailer = {
    id: string;
    results?: string;
    iso_3166_1?: string;
    iso_639_1?: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
  };

export type AuthorDetails = {
    avatar_path: string;
    name: string;
    rating: number;
    username: string;
  };
  
export type Review = {
    author: string;
    author_details: AuthorDetails;
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  };