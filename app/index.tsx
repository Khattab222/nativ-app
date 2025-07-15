
import {  Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import { Bars3BottomLeftIcon, MagnifyingGlassIcon, } from "react-native-heroicons/outline";
import { StatusBar } from 'expo-status-bar';
import { styles } from "@/theme";
import TrendingMovies from "@/components/trendingMovies";
import { useEffect, useState } from "react";
import MovieList from "@/components/movieList";
import { useRouter } from "expo-router";
import Loading from "@/components/loading";
import { FetchTrendingMovies } from "@/api/moviedb";

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};


export default function Index() {
const router = useRouter();
  const ios = Platform.OS === 'ios';
const [trending, setTrending] = useState(["ds","2","3","4","5","6","7","8","9","10"]);
const [upcoming, setUpcoming] = useState([1,2,3,4,5,6,7,8,9,10]);
const [topRated, setTopRated] = useState([1,2,3,4,5,6,7,8,9,10]);
const [loading, setloading] = useState(false)

useEffect(() => {
  
getTrendingMovies()
}, [])

const getTrendingMovies = async()=>{
  setloading(true)
  const data = await FetchTrendingMovies()
  console.log(data.results)
  if(data.results && data.results.length>0){
    setTrending(data.results)
}
  setloading(false)

}
  return (
  

     <View className="flex-1 bg-neutral-800"  >
    <SafeAreaView className={ios?"my-2":'mb-3'}>
    <StatusBar style="light" />
    <View className="flex-row justify-between items-center mx-4">
      <Bars3BottomLeftIcon size={30} color={"#fff"} strokeWidth={2}  />
      <Text className="text-white text-3xl font-bold">
         
         <Text style={styles && styles.text ? styles.text : {}}>M</Text>ovies
         
      </Text>
      <TouchableOpacity onPress={() => router.push("/search")}   >
    <MagnifyingGlassIcon size={30} color={"#fff"} strokeWidth={2} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>

    {
      loading? <Loading/>:  <ScrollView 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom: 10,}}
    className="flex-1"
    >
      {/* {trending movies carousel} */}
<TrendingMovies title="trending"  data={trending}/>
{/* {upcoming movies list} */}
<MovieList title="upcoming" data={upcoming}/>
{/* {top rated movies list} */}
<MovieList title="top rated" data={topRated}/>
    </ScrollView>
    }
  
    </View>
  

  );
}
