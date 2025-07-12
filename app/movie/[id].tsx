import { styles, theme } from '@/theme';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Platform, ScrollView, TouchableOpacity, View } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import {  HeartIcon } from 'react-native-heroicons/solid';
import {SafeAreaView} from 'react-native-safe-area-context';


export default function MovieDetails() {
const ios = Platform.OS === 'ios';
const topMargin=ios?"":"mt-3"
const { id } = useLocalSearchParams()
const [isfavourite, setIsfavourite] = useState(false)
const  router= useRouter();
useEffect(() => {
  // fetch movie details
}, [id])

  return (
   <ScrollView 
   contentContainerStyle={{paddingBottom: 10}}
   className="flex-1 bg-neutral-800"  >
    {/* back button and movie poster */}
    
    <SafeAreaView className={' absolute flex-row 0 z-20 w-full justify-between items-center py-2 px-2 '+ topMargin}>
      <TouchableOpacity onPress={()=>router.back()} style={styles.background} className='rounded-xl p-2'>
        <ChevronLeftIcon size={20} strokeWidth={2.5} color={"white"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setIsfavourite(!isfavourite)}  className=' p-2'>
        <HeartIcon size={30} strokeWidth={1.5} color={isfavourite?theme.background:"white"} />
      </TouchableOpacity>
    
    </SafeAreaView>
  
  
</ScrollView>
  )
}

