import { useNavigation, useRouter } from 'expo-router';
import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Carousel from "react-native-reanimated-carousel";

const defaultDataWith6Colors = [
	"#B0604D",
	"#899F9C",
	"#B3C680",
	"#5C6265",
	"#F5D399",
	"#F1F1F1",
];

  const {width,height} = Dimensions.get('window'); 
export default function TrendingMovies({ title,data }: { title: string; data: number[] }) {


const handleclick = () => {
  console.log("Clicked");
};

  return (
	<View className='mb-8'>
	  <Text className='text-white text-xl mx-4 mb-5 uppercase'>{title}</Text>

	  <Carousel
		autoPlayInterval={500}
		data={defaultDataWith6Colors}
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
  ({ item, index }: { item: string; index: number }) => {
const router = useRouter()
    const handleclick = () => {
  console.log("Clicked");
  router.push('/movie')
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
      
			source={require("../assets/images/poster1.png")}
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