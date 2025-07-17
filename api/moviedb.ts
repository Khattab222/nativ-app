import {  IMovieDetails, MovieCredits } from '@/types';
import axios from "axios";

export const ApiKey = "5a85e1a3818a5372ba0f9e7742424f0f";
const apiBaseUrl = "https://api.themoviedb.org/3";
export const baseImageUrl = `https://image.tmdb.org/t/p/w500`;
export const image500 = (path: string) => (path ? `${baseImageUrl}/w500${path}` : null);
export const image342 = (path: string) => (path ? `${baseImageUrl}/w342${path}` : null);
export const image185 = (path: string) => (path ? `${baseImageUrl}/w185${path}` : null);
// endpoints
const trendMoviesEndPoint = `${apiBaseUrl}/trending/movie/day?api_key=${ApiKey}`;
const upCommingEndPoints = `${apiBaseUrl}/movie/upcoming?api_key=${ApiKey}`;
const topRatedEndPoints = `${apiBaseUrl}/movie/top_rated?api_key=${ApiKey}`;

// dynamic endpoints
const movieDetailsEndPoint = `${apiBaseUrl}/movie/movie_id?api_key=${ApiKey}`;
const movieCreditsEndPoint = `${apiBaseUrl}/movie/movie_id/credits?api_key=${ApiKey}`;
const movieSimilarMovies =`${apiBaseUrl}/movie/movie_id/similar?api_key=${ApiKey}`



const apiCall = async ({ endpoint, param }: { endpoint: any; param?: any }) => {
  const option = {
    method: "GET",
    url: endpoint,
    params: param ? param : {},
  };

  try {
    const response = await axios.request(option);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return {};
  }
};

export const FetchTrendingMovies = () => {
  return apiCall({ endpoint: trendMoviesEndPoint });
};
export const FetchUpCommingMovies = () => {
  return apiCall({ endpoint: upCommingEndPoints });
};
export const FetchTopRatedMovies = () => {
  return apiCall({ endpoint: topRatedEndPoints });
};

export const FetchMovieDetails = async (id: string): Promise<IMovieDetails> => {
  return apiCall({ endpoint: movieDetailsEndPoint.replace("movie_id", id) });
};
export const FetchMovieCredits = async (id: string): Promise<MovieCredits> => {
  return apiCall({ endpoint: movieCreditsEndPoint.replace("movie_id", id) });
};
export const FetchSimilarMovies = async (id: string) => {
  return apiCall({ endpoint: movieSimilarMovies.replace("movie_id", id) });
};



const sdsdsdsd = {
  adult: false,
  backdrop_path: "/ovZasZ9EeZcp6UsrElkQ63hFCd.jpg",
  genre_ids: [14, 10751, 28],
  id: 1087192,
  media_type: "movie",
  original_language: "en",
  original_title: "How to Train Your Dragon",
  overview:
    "On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society.",
  popularity: 558.2017,
  poster_path: "/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg",
  release_date: "2025-06-06",
  title: "How to Train Your Dragon",
  video: false,
  vote_average: 8.012,
  vote_count: 718,
};

const movie = {
  adult: false,
  backdrop_path: "/ovZasZ9EeZcp6UsrElkQ63hFCd.jpg",
  belongs_to_collection: {
    backdrop_path: "/eKpWn8DwS6xpAKs4eLb4PmrXnhk.jpg",
    id: 1458864,
    name: "How to Train Your Dragon (Live-Action) Collection",
    poster_path: null,
  },
  budget: 150000000,
  genres: [
    { id: 14, name: "Fantasy" },
    { id: 10751, name: "Family" },
    { id: 28, name: "Action" },
  ],
  homepage: "https://www.welcometoberk.com/",
  id: 1087192,
  imdb_id: "tt26743210",
  origin_country: ["US"],
  original_language: "en",
  original_title: "How to Train Your Dragon",
  overview:
    "On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society.",
  popularity: 558.2017,
  poster_path: "/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg",
  production_companies: [
    {
      id: 521,
      logo_path: "/kP7t6RwGz2AvvTkvnI1uteEwHet.png",
      name: "DreamWorks Animation",
      origin_country: "US",
    },
    {
      id: 2527,
      logo_path: "/mNSqvPrlkAcdQlEZ3Ttmx75Z8Xw.png",
      name: "Marc Platt Productions",
      origin_country: "US",
    },
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" },
  ],
  release_date: "2025-06-06",
  revenue: 562818950,
  runtime: 125,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
  ],
  status: "Released",
  tagline: "The legend is real.",
  title: "How to Train Your Dragon",
  video: false,
  vote_average: 8.009,
  vote_count: 714,
};
