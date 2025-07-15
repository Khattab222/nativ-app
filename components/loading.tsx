import { theme } from '@/theme';
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import * as Progress from 'react-native-progress';

const {width,height} = Dimensions.get("window")
export default function Loading() {
  return (
    <View style={{height,width}} className='flex-row justify-center items-center'>
    <Progress.CircleSnail thickness={12} size={160} color={theme.background}/>
    </View>
  )
}

const styles = StyleSheet.create({})