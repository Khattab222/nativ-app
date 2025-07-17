
import { FetchActorDetails, FetchActorMovies } from '@/api/actor';
import Loading from '@/components/loading';
import MovieList from '@/components/movieList';
import { styles } from '@/theme';
import { IActorDetails } from '@/types';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Dimensions,  Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';


const {width,height} = Dimensions.get("window")
const ios = Platform.OS === 'ios';

export default function ActorDetails() {
  const verticalMargin=ios?"":"my-3"
 const { id } = useLocalSearchParams();

  const [isfavourite, setIsfavourite] = useState(false)
  const [actor, setactor] = useState<IActorDetails|null>(null)
  const [personMovies, setpersonMovies] = useState([])
const [loading, setloading] = useState(false)

  
  const router = useRouter();

useEffect(() => {
  
setloading(true)
getActorDetails(id as string)
getActorMovies(id as string)
}, [id])

const getActorDetails =async (id:string)=>{

const data = await FetchActorDetails(id)

  if(data){
setactor(data)
  // setcast(data.cast)
}
setloading(false)
}



const getActorMovies =async (id:string)=>{

const data = await FetchActorMovies(id)

  if(data && data.cast){
setpersonMovies(data.cast)

}
setloading(false)
}
  return (
    <ScrollView  className='flex-1 bg-neutral-900' 
    contentContainerStyle={{paddingBottom: 20}}
    >
    {/* back button */}
      <SafeAreaView className={'  flex-row 0 z-20 w-full justify-between items-center py-2 px-2 '+ verticalMargin}>
      <TouchableOpacity onPress={()=>router.back()} style={styles.background} className='rounded-xl p-2'>
        <ChevronLeftIcon size={20} strokeWidth={2.5} color={"white"} />
      </TouchableOpacity>
        <TouchableOpacity onPress={()=>setIsfavourite(!isfavourite)}  className=' p-2'>
        <HeartIcon size={30} strokeWidth={1.5} color={isfavourite?"red":"white"} />
      </TouchableOpacity>
    
    
    </SafeAreaView>

    {/* person details */}
    {
      loading?<Loading/> :   <View>
      <View className='flex-row justify-center'>
        <View 
          className='items-center  rounded-full overflow-hidden h-72 w-72'
          style={{
          
            borderWidth: 2,
            // borderColor: 'rgba(255, 255, 255, 0.5)',
            shadowColor: "#fff",
            shadowRadius: 40,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.9,
        
            ...Platform.select({
              android: {
                elevation: 15,
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.9,
              },
              ios: {
                shadowColor: "#fff",
                shadowRadius: 30,
                shadowOpacity: 1,
                shadowOffset: { width: 0, height: 5 },
              }
            })
          }}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w185${actor?.profile_path}` }}
            style={{
              height: "100%",
              width:" 100%",
              
                    alignSelf: 'center',
              // borderRadius: (width * 0.74) / 2,
            }}
             />
        </View>
      
      </View>

            <View className='mt-8'>
              <Text className='text-3xl text-white font-bold text-center'>
              {actor?.name}
              </Text>
              <Text className='text-base text-neutral-500 font-bold text-center'>
              {actor?.place_of_birth}
              </Text>


            </View>
            <View className='mx-3 rounded-full mt-6 flex-row p-2 justify-between items-center bg-neutral-700'>
            <View className='border-r-2 border-r-neutral-400 px-4 items-center'>
              <Text className='text-white font-semibold '>Gender</Text>
              <Text className='text-neutral-300 text-sm '>{actor?.gender === 1?"female":"male"}</Text>
            </View>
            <View className='border-r-2 border-r-neutral-400 px-4 items-center'>
              <Text className='text-white font-semibold '>Birthday</Text>
              <Text className='text-neutral-300 text-sm '>{actor?.birthday}</Text>
            </View>
            <View className='border-r-2 border-r-neutral-400 px-4 items-center'>
              <Text className='text-white font-semibold '>know for</Text>
              <Text className='text-neutral-300 text-sm '>{actor?.known_for_department}</Text>
            </View>
            <View className=' px-4 items-center'>
              <Text className='text-white font-semibold '>Popularity</Text>
              <Text className='text-neutral-300 text-sm '>{actor?.popularity.toFixed(2)}</Text>
            </View>
            </View>


            <View className='my-6 mx-4 space-y-2'>
              <Text className='text-white text-lg'>Biography</Text>
              <Text className='text-neutral-300 tracking-wide text-justify'> {actor?.biography}</Text>
            </View>

{/* movies */}
<MovieList title='person' data={personMovies} hideSeeAll={true}/>

    </View>
    }
  
    </ScrollView>
  )
}

