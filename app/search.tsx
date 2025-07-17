import Loading from '@/components/loading';
import { useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import {debounce} from "lodash"
import { searchMovies } from '@/api/moviedb';
import { IMovieDetails } from '@/types';


const {width,height} = Dimensions.get("window")
const ios = Platform.OS === 'ios';

export default function search() {
  const router = useRouter();
  const [results, setresults] = useState<IMovieDetails[]|[]>([])
  const [loading, setloading] = useState(false)


const handleSearch = (value:string) =>{
    if (value&&value.length>2) {
      setloading(true)
      searchMovies({
        query:value,
        include_adult:true,
        language:"en-US",
        page:1
      }).then((data)=>{
        setloading(false)
        console.log("movie:",data)
        setresults(data.results)
      })
    }else{
      setloading(false)
      setresults([])
    }
}
const handleTextDebounce = useCallback(debounce (handleSearch,400),[])
  return (
    <SafeAreaView className='bg-neutral-800 flex-1'>
      <View className='mx-4 mb-3 mt-3  flex-row justify-between items-center border border-neutral-500 rounded-full'>
        <TextInput
        onChangeText={handleTextDebounce}
          placeholder='Search for movies ...'
          placeholderTextColor={'lightgrey'}
          className='text-white py-1 pl-6 flex-1  tracking-wider font-semibold'
          
        />
        <TouchableOpacity
        onPress={() => router.push("/")}
        className='rounded-full p-3 m-1 bg-neutral-500'
        >
          <XMarkIcon size={"25"} color={"white"}/>
        </TouchableOpacity>
      </View>


{/* results */}
{
  loading?<Loading/> :
  
    results?.length>0 ?  <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}
      >
      <Text className='text-white font-semibold ml-1 mb-4'>Results ({results.length})</Text>
  
      <View 
      
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 20
      }}
      >
        {results.map((item,i)=>{
            return (
              <TouchableWithoutFeedback 
                key={i}
                onPress={()=>router.push({pathname:"/movie/[id]",params:{id:item.id}})}
              >
                <View style={{
                  width: width * 0.44,
                  marginBottom: 16
                }}>
                  <Image
                  
                            source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}

                    className='rounded-lg'
                    style={{
                      width: '100%',
                      height: height * 0.3,
                      resizeMode: 'cover'
                    }}
                  />
                  <Text className='text-neutral-300 ml-1 mt-1 text-center'>{item.title}</Text>
                </View>
          </TouchableWithoutFeedback>
        )
      })
    }
  </View>
    </ScrollView>   : <View className='flex-row justify-center'>
      <Image source={require("../assets/images/movietime.jpg")}
      className='h-96 w-96 rounded-full'
      />
    </View>

}

  

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})