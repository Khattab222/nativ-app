
import axios from "axios";

export const ApiKey = "5a85e1a3818a5372ba0f9e7742424f0f"
const apiBaseUrl = 'https://api.themoviedb.org/3'
const baseImageUrl = `https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg`
// endpoints
const trendMoviesEndPoint = `${apiBaseUrl}/trending/movie/day?api_key=${ApiKey}`;
const upCommingEndPoints = `${apiBaseUrl}/movie/upcoming?api_key=${ApiKey}`
const topRatedEndPoints = `${apiBaseUrl}/movie/top_rated?api_key=${ApiKey}`


const apiCall = async({endpoint,param}:{endpoint:any,param?:any}) =>{
  const option={
    method:"GET",
    url:endpoint,
    params:param?param:{}
  }

  try {
    const response = await axios.request(option);
    return response.data
  } catch (error) {
    console.log("error",error)
    return {}
  }
}

export const FetchTrendingMovies = ()=>{
return  apiCall({endpoint: trendMoviesEndPoint})
}
export const FetchUpCommingMovies = ()=>{
return  apiCall({endpoint: upCommingEndPoints})
}
export const FetchTopRatedMovies = ()=>{
return  apiCall({endpoint:topRatedEndPoints})
}
