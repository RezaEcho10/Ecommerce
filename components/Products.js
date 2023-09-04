import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Product } from '../Constant/data'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'

const Products = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.Main}>
      <Text>Trending Deals of the Week</Text>
      <View style={styles.Products}>
        {
          Product.map((pro, index) => (
              <Pressable onPress={() => navigation.navigate('ProductInfo', {
                image: pro.image,
                name: pro.name,
                desc: pro.description,
                price: pro.price,
              })} style={{alignItems: 'center'}}>
                  <Image source={pro?.image} key={index} style={styles.ImageProduct} />
              </Pressable>
          ))
        }
      </View>
    </View>
  )
}

export default Products