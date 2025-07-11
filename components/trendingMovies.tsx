import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Carousel from "react-native-reanimated-carousel";

const defaultDataWith6Colors = [
	"#B0604D",
	"#899F9C",
	"#B3C680",
	"#5C6265",
	"#F5D399",
	"#F1F1F1",
];


export default function TrendingMovies({ data }: { data: number[] }) {

  
  const {width,height} = Dimensions.get('window'); 



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
				style={{
					width: 400,
				}}
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
	  <View
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
		<Text style={{ color: '#222', fontSize: 24, fontWeight: 'bold' }}>#{index + 1}</Text>
	  </View>
	);
  };

const styles = StyleSheet.create({})