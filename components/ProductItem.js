import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import React from 'react'
import { Product } from '../Constant/data'
import { styles } from './style'

const ProductItem = () => {
  return (
    <View style={styles.Main}>
        <View style={styles.Products}>
        {
            Product.map(pro => (
                <Pressable style={{alignItems: 'center', marginTop: 15}}>
                    <Image source={pro.image} style={styles.ImageProductItem} />
                    <Text>{pro.name}</Text>
                    <View style={{width: '95%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 900}}>{pro.price} $</Text>
                        <Text style={{color: '#FFC72C', fontWeight: 'bold'}}>{pro.rating} Rating</Text>
                    </View>
                </Pressable>
            ))
        }
        </View>
    </View>
  )
}

export default ProductItem