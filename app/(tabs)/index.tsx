import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link, useRouter } from "expo-router";

import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

export default function Index() {
  const router = useRouter()
  return (
    <View className="flex-1 bg-primary">
        <Image source={images.bg} className="absolute w-full z-0"/>


        <ScrollView className="flex-1 px-5 py-10"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%',paddingBottom:10 }}
        >
      <Image source={icons.logo} className="  mt-20 mb-5 mx-auto"/>
    

      <SearchBar onPress={() => router.push('/search')}  placeholder="Search for movies" value="" />
    
      <View className=" mt-5">
        <ActivityIndicator color="#AB8BFF" size="large" className="self-center" />
      </View>
        </ScrollView>
    </View>
  );
}
