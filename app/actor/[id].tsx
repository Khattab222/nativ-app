import { FetchMovieDetails } from '@/api/moviedb';
import Loading from '@/components/loading';
import MovieList from '@/components/movieList';
import { styles } from '@/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Dimensions, Image, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';


const {width,height} = Dimensions.get("window")
const ios = Platform.OS === 'ios';

export default function ActorDetails() {
  const verticalMargin=ios?"":"my-3"
 const { id } = useLocalSearchParams();
 console.log({id})
  const [isfavourite, setIsfavourite] = useState(false)
  const [personMovies, setpersonMovies] = useState(["ssd","sdsdsd","sdsdsasa"])
const [loading, setloading] = useState(false)

  
  const router = useRouter();



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
            source={require("../../assets/images/cast.jpg")}
            style={{
              height: height * 0.43,
              width: width * 0.74,
              borderRadius: (width * 0.74) / 2,
            }} />
        </View>
      
      </View>

            <View className='mt-8'>
              <Text className='text-3xl text-white font-bold text-center'>
                Actor Name
              </Text>
              <Text className='text-base text-neutral-500 font-bold text-center'>
                london , united kingdom
              </Text>


            </View>
            <View className='mx-3 rounded-full mt-6 flex-row p-2 justify-between items-center bg-neutral-700'>
            <View className='border-r-2 border-r-neutral-400 px-4 items-center'>
              <Text className='text-white font-semibold '>Gender</Text>
              <Text className='text-neutral-300 text-sm '>Male</Text>
            </View>
            <View className='border-r-2 border-r-neutral-400 px-4 items-center'>
              <Text className='text-white font-semibold '>Birthday</Text>
              <Text className='text-neutral-300 text-sm '>1648-5-2</Text>
            </View>
            <View className='border-r-2 border-r-neutral-400 px-4 items-center'>
              <Text className='text-white font-semibold '>know for</Text>
              <Text className='text-neutral-300 text-sm '>Action</Text>
            </View>
            <View className=' px-4 items-center'>
              <Text className='text-white font-semibold '>Popularity</Text>
              <Text className='text-neutral-300 text-sm '>High</Text>
            </View>
            </View>


            <View className='my-6 mx-4 space-y-2'>
              <Text className='text-white text-lg'>Biography</Text>
              <Text className='text-neutral-300 tracking-wide text-justify'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nemo nam atque, doloremque rem asperiores, temporibus architecto, quasi illum ipsum sapiente minima ab? Amet harum quisquam doloremque accusamus, aliquid officia.
              Quae, eos! Tempore amet nam perferendis delectus explicabo quaerat esse omnis suscipit, non veritatis. Eius laborum maxime alias veritatis suscipit repellendus ullam sit officiis exercitationem. Necessitatibus nihil possimus ad porro?
              Exercitationem, repellat assumenda unde quis iusto voluptas molestiae. Doloremque distinctio eligeecuvel assumenda corrupti, iusto aperiam mollitia fugiat dolores vitae.
              Animi, expedita iure. Perspiciatis, dolores blanditiis tenetur est, quasi reiciendis enim rerum praesentium, repellendus veniam itaque facilis officiis! Optio nulla nisi enim consequuntur. Saepe, voluptas quibusdam? Error deserunt iusto numquam?
              Rerum natus praesentium qui similique fugiat nostrum mollitia eius illum at sit molestias vitae, obcaecati architecto omnis corporis quod aliquid suscipit molestiae ipsam voluptates veritatis atque magnam? Voluptatibus, dolorem harum.
              Explicabo ducimus minima ipsam, quo quos, repellat qui amet unde quam asperiores recusandae eius neque enim assumenda. Esse doloremque distinctio doloribus ad dignissimos? Aperiam dolores ex sit perferendis placeat nostrum!
              Assumenda vitae adipisci neque tenetur numquam autem porro in, harum beatae? Voluptatem tempore doloribus ducimus modi facere, molestiae iure minima dolores deserunt at, vero temporibus? Earum enim temporibus laudantium aliquam.
              Incidunt nemo voluptas eligendi obcaecati laboriosam ratione aspernatur beatae quia, explicabo tempore,  magni perspiciatis iure?
              Nesciunt dicta ullam at ipsa doloremque velit aperiam excepturi optio maxime eaque. Labore vollo! In labore alias, id vel omnis ex maiores.</Text>
            </View>

{/* movies */}
<MovieList title='person' data={personMovies} hideSeeAll={true}/>

    </View>
    }
  
    </ScrollView>
  )
}

