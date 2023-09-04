import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import {Product} from '../Constant/data'

const Slide = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            Product.map(pro => (
                <View style={{width: 500,marginLeft: -45}}>
                    <Image source={pro.image} style={{width: '100%', height: 200, borderRadius: 5}} />
                </View>
            ))
        }
    </ScrollView>
  )
}

export default Slide