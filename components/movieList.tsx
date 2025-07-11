import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from '@/theme'

export default function MovieList({title,data}:{title:string,data:number[]}) {
  return (
    <View className='mb-4 space-y-4'>
      <View className='flex-row justify-between mx-4 items-center'>

        <Text className='text-white text-xl   uppercase'>{title}</Text>
    <TouchableOpacity>
      <Text style={styles.text} className='text-lg capitalize'>see All</Text>
    </TouchableOpacity>
      </View>
    </View>
  )
}

