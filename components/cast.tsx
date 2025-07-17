import { ICast } from '@/types';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export default function Cast({cast}: {cast: ICast[]}) {

  const  router= useRouter();
  
  return (
    <View className='my-6'>
      <Text className='text-white text-lg my-4 mx-2 '>Top Cast</Text>
      <ScrollView 
      horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{ paddingHorizontal: 16 }}
       >
        {cast.map((actor, index) => (
          <TouchableOpacity key={index}
          onPress={() => router.push({ pathname: '/actor/[id]', params: { id: actor.id } })} // Assuming you have an actor details page
          className='mr-4 flex items-center justify-center'>
            <Image
            className='rounded-full w-20 h-20'
            // source={require('../assets/images/cast.jpg')}
            source={{ uri: `https://image.tmdb.org/t/p/w185${actor.profile_path}` }}

            />
            <Text className='text-white text-xs mt-1 font-bold'>{actor.name}</Text>
            <Text className='text-white text-xs mt-1 font-bold'>{actor.character}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})