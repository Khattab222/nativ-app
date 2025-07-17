import { styles, theme } from '@/theme';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Dimensions, Image, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import {  HeartIcon } from 'react-native-heroicons/solid';
import {SafeAreaView} from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '@/components/cast';
import MovieList from '@/components/movieList';
import Loading from '@/components/loading';
import { baseImageUrl, FetchMovieCredits, FetchMovieDetails, FetchSimilarMovies } from '@/api/moviedb';
import { ICast, IMovieDetails  } from '@/types';

const {width,height} = Dimensions.get("window")
const ios = Platform.OS === 'ios';

export default function MovieDetails() {


const topMargin=ios?"":"mt-3"
const { id } = useLocalSearchParams()
const [isfavourite, setIsfavourite] = useState(false)
const [movie, setMovie] = useState<IMovieDetails|null>(null)
const [loading, setloading] = useState(false)

const [similarmovies, setsimilarmovies] = useState([])
const [cast, setcast] = useState<ICast[]>([]);
const  router= useRouter();
useEffect(() => {

    setloading(true)
  getMovieDetails(id as string);
  getMovieCredits(id as string);
  getSimilarMovies(id as string);
}, [id])




  
const getMovieDetails =async (id:string)=>{

const data = await FetchMovieDetails(id)

  if(data){
  setMovie(data)
}
setloading(false)
}
const getMovieCredits =async (id:string)=>{

const data = await FetchMovieCredits(id)

  if(data){
  
  setcast(data.cast)
}
setloading(false)
}
const getSimilarMovies =async (id:string)=>{

const data = await FetchSimilarMovies(id)

  if(data.results && data.results.length>0){
setsimilarmovies(data.results)
  // setcast(data.cast)
}
setloading(false)
}
  return (
   <ScrollView 
   contentContainerStyle={{paddingBottom: 10}}
   className="flex-1 bg-neutral-800"  >
    {/* back button and movie poster */}
    
    <SafeAreaView className={' absolute flex-row 0 z-20 w-full justify-between items-center py-2 px-2 '+ topMargin}>
      <TouchableOpacity onPress={()=>router.back()} style={styles.background} className='rounded-xl p-2'>
        <ChevronLeftIcon size={20} strokeWidth={2.5} color={"white"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setIsfavourite(!isfavourite)}  className=' p-2'>
        <HeartIcon size={30} strokeWidth={1.5} color={isfavourite?theme.background:"white"} />
      </TouchableOpacity>
    
    </SafeAreaView>
    {
      loading?<Loading/> :<>
      <View className=''>
      <Image
      // source={{ uri: `${baseImageUrl}${movie?.poster_path}` }}
                            source={{ uri: `https://image.tmdb.org/t/p/w500/${movie?.poster_path}` }}

    
      style={{width,height:height*0.60}}
      />
      <LinearGradient 
      colors={['transparent', 'rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
      style={{width,height:height*0.30}}
      // start={{x:0.5,y:0}}
      // end={{x:0.5,y:1}}
      className=' absolute bottom-0 '
      />
    </View>
      {/* movie details */}
  <View style={{marginTop:-height*0.15}} className='px-4 flex items-center gap-4 space-x-10 justify-center '>
    <Text className='text-white text-3xl  tracking-wider font-bold'>{movie?.title}</Text>
    <Text className='text-neutral-400'>Release Date: {movie?.release_date}</Text>
    <Text className='text-neutral-400'>Rating: {movie?.vote_average.toFixed(1)}/10</Text>

    {/* genres */}
    <View className='flex-row items-center gap-4'>
    {
      movie?.genres && movie.genres.length && movie.genres.map((item,i)=>  <Text key={i} className='text-neutral-300 text-sm'>{item.name} </Text>)
    }
    
    </View>
  </View>

  {/* description */}
  <View className='px-4 mt-4'>
    <Text className='text-neutral-300 text-base mx-4 tracking-wider text-justify'>{movie?.overview}</Text>
  </View>
  {/* cast */}
  <Cast cast={cast}/>
  {/* similar movies */}
  <MovieList title='similar movies' hideSeeAll={true} data={similarmovies}/>
      
      </> 
    }
    

</ScrollView>
  )
}

