import { styles, theme } from '@/theme';
import { useRouter } from 'expo-router';
import { use, useState } from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';


const {width,height} = Dimensions.get("window")
const ios = Platform.OS === 'ios';

export default function ActorDetails() {
  const verticalMargin=ios?"":"my-3"

  const [isfavourite, setIsfavourite] = useState(false)
  
  const router = useRouter();
  return (
    <ScrollView  className='flex-1 bg-neutral-900' 
    contentContainerStyle={{paddingBottom: 20}}
    >
    {/* back button */}
      <SafeAreaView className={'  flex-row 0 z-20 w-full justify-between items-center py-2 px-2 '+ verticalMargin}>
      <TouchableOpacity onPress={()=>router.back()} style={styles.background} className='rounded-xl p-2'>
        <ChevronLeftIcon size={20} strokeWidth={2.5} color={"white"} />
      </TouchableOpacity>
        <TouchableOpacity onPress={()=>setIsfavourite(!isfavourite)}  className=' p-2'>
        <HeartIcon size={30} strokeWidth={1.5} color={isfavourite?"red":"white"} />
      </TouchableOpacity>
    
    
    </SafeAreaView>
    </ScrollView>
  )
}

