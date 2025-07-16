import { baseImageUrl } from '@/api/moviedb';
import { Movie } from '@/types';
import { Link, useNavigation, useRouter } from 'expo-router';
import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Carousel from "react-native-reanimated-carousel";



  const {width,height} = Dimensions.get('window'); 
export default function TrendingMovies({ title,data }: { title: string; data: Movie[] }) {


const handleclick = () => {
  console.log("Clicked");
};

  return (
	<View className='mb-8'>
	  <Text className='text-white text-xl mx-4 mb-5 uppercase'>{title}</Text>
    

	  <Carousel
		autoPlayInterval={500}
		data={data}
		height={height * 0.45}
		loop={true}
		pagingEnabled={true}
		snapEnabled={true}
		width={width}
		style={{ alignSelf: 'center' }}
		mode="parallax"
		modeConfig={{
		  parallaxScrollingScale: 0.85, // scale down side items
		  parallaxScrollingOffset: width * 0.32, // offset to show part of side items
		}}
		renderItem={renderItem({ rounded: true })}
		windowSize={3}
	  />



	</View>
  )
}
const renderItem = ({ rounded }: { rounded?: boolean }) =>
  ({ item, index }: { item: Movie; index: number }) => {
const router = useRouter()
    const handleclick = () => {
  
router.push({ pathname: '/movie/[id]', params: { id: item.id} })
};

	return (
	  <TouchableWithoutFeedback onPress={handleclick}  >
		<View
    
		  style={{
			marginHorizontal: 12,
			borderRadius: rounded ? 18 : 8,
			overflow: 'hidden',
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 6 },
			shadowOpacity: 0.18,
			shadowRadius: 12,
			elevation: 8,
			backgroundColor: '#18181b',
		  }}
		>
		  <Image

			source={{ uri: `${baseImageUrl}${item.poster_path}` }}
			style={{
			  width: width * 0.68,
			  height: height * 0.42,
			  borderRadius: rounded ? 18 : 8,
			  borderWidth: 2,
			  borderColor: '#fff',
			  resizeMode: 'cover',
			  alignSelf: 'center',
			}}
		  />
		</View>
	  </TouchableWithoutFeedback>
	);
  };


const styles = StyleSheet.create({})