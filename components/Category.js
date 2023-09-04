import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import {Product} from '../Constant/data'

const Category = () => {
  return (
    <ScrollView style={{padding: 15}} horizontal showsHorizontalScrollIndicator={false}>
        {
            Product.map(pro => (
                <View style={{marginRight: 30, alignItems: 'center'}}>
                    <Image source={pro.image} style={{width: 50, height: 50, borderRadius: '50%'}} />
                    <Text style={{marginTop: 10, fontWeight: 500}}>{pro.name}</Text>
                </View>
            ))
        }
    </ScrollView>
  )
}

export default Category