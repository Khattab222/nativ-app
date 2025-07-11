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
export default function TrendingMovies({ data }: { data: number[] }) {

  




  return (
	<View className='mb-8'>
	  <Text className='text-white text-xl mx-4 mb-5'>Trending</Text>
	  
<Carousel
				autoPlayInterval={2000}
				data={defaultDataWith6Colors}
				height={270}
				loop={true}
				pagingEnabled={true}
				snapEnabled={true}
				width={width}
				// style={width*0.62}
				mode="parallax"
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: 70,
				}}
				// onProgressChange={progress}
				renderItem={renderItem({ rounded: true })}
			/>



	</View>
  )
}

const renderItem = ({ rounded }: { rounded?: boolean }) =>
  ({ item, index }: { item: string; index: number }) => {
	return (
	  <TouchableWithoutFeedback
		style={[
		  {
      
			flex: 1,
			margin: 10,
			borderRadius: rounded ? 20 : 0,
			backgroundColor: item,
			justifyContent: 'center',
			alignItems: 'center',
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.2,
			shadowRadius: 4,
			elevation: 5,
		  },
		]}
	  >
               <Image source={require("../assets/images/poster.png")}
               className='w-full h-full aspect-square '
              //  style={{
              //   width: width*0.6,
              //   height: height*0.4,
              //   borderColor: 'white',
              //  }}
               
               
               />

</TouchableWithoutFeedback>
	);
  };

const styles = StyleSheet.create({})