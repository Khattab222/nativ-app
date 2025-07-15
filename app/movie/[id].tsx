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

const {width,height} = Dimensions.get("window")
const ios = Platform.OS === 'ios';
export default function MovieDetails() {
const topMargin=ios?"":"mt-3"
const { id } = useLocalSearchParams()
const [isfavourite, setIsfavourite] = useState(false)
const [loading, setloading] = useState(false)

const [similarmovies, setsimilarmovies] = useState(["hggj","hghgh","hghgyh"])
const [cast, setcast] = useState(["aahmed","mohamed","ali","sara","nada","hassan","yasser","omar","khaled","ahmed"]);
const  router= useRouter();
useEffect(() => {
  // fetch movie details
}, [id])

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
      <View>
      <Image
      source={require('../../assets/images/poster1.png')}
      style={{width,height:height*0.55}}
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
  <View style={{marginTop:-height*0.15}} className='px-4 flex items-center gap-4 space-x-10 justify-center'>
    <Text className='text-white text-3xl  tracking-wider font-bold'>{'Movie Title'}</Text>
    <Text className='text-neutral-400'>Release Date: 2023-01-01</Text>
    <Text className='text-neutral-400'>Rating: 8.5/10</Text>

    {/* genres */}
    <View className='flex-row items-center '>
      <Text className='text-neutral-300 text-sm'>Action - </Text>
      <Text className='text-neutral-300 text-sm'>Adventure - </Text>
      <Text className='text-neutral-300 text-sm'>Sci-Fi </Text>
    </View>
  </View>

  {/* description */}
  <View className='px-4 mt-4'>
    <Text className='text-neutral-300 text-base mx-4 tracking-wider text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
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

