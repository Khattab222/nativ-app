import axios from "axios";
import { ApiKey } from "./moviedb";
import { IActorDetails } from "@/types";




const apiBaseUrl = "https://api.themoviedb.org/3";

// cast details
const actorDetailsEndPoint = `${apiBaseUrl}/person/person_id?api_key=${ApiKey}`
const actorMoviesEndPoints= `${apiBaseUrl}/person/person_id/movie_credits?api_key=${ApiKey}`



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

export const FetchActorDetails = async (id: string): Promise<IActorDetails> => {
  return apiCall({ endpoint: actorDetailsEndPoint.replace("person_id", id) });
};
export const FetchActorMovies = async (id: string) => {
  return apiCall({ endpoint: actorMoviesEndPoints.replace("person_id", id) });
};