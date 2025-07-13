import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export default function Cast({cast}: {cast: string[]}) {

  const  router= useRouter();
  
  return (
    <View className='my-6'>
      <Text className='text-white text-lg mx-4 '>Top Cast</Text>
      <ScrollView 
      horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{ paddingHorizontal: 16 }}
       >
        {cast.map((actor, index) => (
          <TouchableOpacity key={index}
          onPress={() => router.push({ pathname: '/actor/[id]', params: { id: actor } })} // Assuming you have an actor details page
          className='mr-4 flex items-center justify-center'>
            <Image
            className='rounded-full w-20 h-20'
            source={require('../assets/images/cast.jpg')}
            />
            <Text className='text-white text-xs mt-1 font-bold'>{actor}</Text>
            <Text className='text-white text-xs mt-1 font-bold'>{actor}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})