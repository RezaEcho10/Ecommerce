import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { Search } from '../components'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './style'

const ProductInfo = ({route}) => {
    const {image, name, desc, price} = route.params
  return (
    <ScrollView>
        <Search />
        <View style={styles.ProductsInfo}>
            <View style={styles.Off}>
                <Text style={styles.Offtxt}>20% off</Text>
            </View>
            <Image source={image} style={styles.img} />
            <Pressable style={[styles.BackIcon,{position: 'absolute', right: 15, top: 20}]}>
                <MaterialCommunityIcons name="share-variant" size={24} color="black" />
            </Pressable>
            <View style={[styles.BackIcon, {position: 'absolute', left: 15, bottom: 20}]}>
                <AntDesign name='hearto' size={24} color='black' />
            </View>
        </View>
        <View style={styles.main}>
            <Text style={{fontWeight: 700}}>{name}</Text>
            <Text>{desc}</Text>
            <Text>{price}</Text>
        </View>
        <Text style={styles.line} />
        <View style={styles.main}>
            <View style={{flexDirection: 'row',}}>
                <Text style={{color: 'grey'}}>Color: </Text>
                <Text>Green</Text>
            </View>
            <View style={{flexDirection: 'row',}}>
                <Text style={{color: 'grey'}}>Size: </Text>
                <Text>Normal</Text>
            </View>
        </View>
        <Text style={styles.line} />
        <View style={styles.main}>
            <View style={{marginTop: 10, marginBottom: 10}}>
                <Text style={{color: 'grey'}}>Total: {price}</Text>
                <Text style={{color: '#00CDE1'}}>Free Deliver Tomorrow by 3 PM.Order within 10hrs 30 mins</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name="location" size={24} color="black" />
                <Text style={{fontSize: 15, fontWeight: 500}}>Deliver To Reza - Newyork +12525555</Text>
            </View>
            <Text style={{color: 'green', marginHorizontal: 15, fontWeight: 500}}>IN Stock</Text>
            <Pressable>
                <Text>Add to Cart</Text>
            </Pressable>
        </View>
    </ScrollView>
  )
}

export default ProductInfo