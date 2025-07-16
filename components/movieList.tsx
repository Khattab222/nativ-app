import { baseImageUrl } from '@/api/moviedb';
import { styles } from '@/theme';
import { Movie } from '@/types';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

  const {width,height} = Dimensions.get('window'); 
export default function MovieList({title,data,hideSeeAll}:{title:string,data:Movie[],hideSeeAll?:boolean}) {
  const router = useRouter();
  return (
    <View className='mb-8 space-y-4'>
      <View className='flex-row justify-between mx-4 mb-4 items-center'>



        <Text className='text-white text-xl   uppercase'>{title}</Text>
    <TouchableOpacity>
      {
  hideSeeAll?null: <Text style={styles.text} className='text-lg capitalize'>see All</Text>  

}
    </TouchableOpacity>
      </View>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {data.map((item, index) => (
          <TouchableWithoutFeedback
          key={index}
           className='mr-4'
           onPress={() => router.push({ pathname: '/movie/[id]', params: { id: item.id } })} // Using correct navigation options
           >
            <View
                
                  style={{
                  marginHorizontal: 12,
                  borderRadius:  8,
                  overflow: 'hidden',
              
                  // elevation: 8,
                  // backgroundColor: '#18181b',
                  }}
                >
                  <Image
                  
                      // source={{ uri: `${baseImageUrl}${item.poster_path}` }}
                      source={{ uri: `https://image.tmdb.org/t/p/w185${item.poster_path}` }}
                  style={{
                    width: width * 0.35,
                    height: height * 0.30,
                    borderRadius:  8,
                    // borderWidth: 2,
                    borderColor: '#fff',
                    resizeMode: 'cover',
                    alignSelf: 'center',
                  }}
                  />
                  <Text className='text-neutral-300 text-center'>{item.title}</Text>
                </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  )
}

