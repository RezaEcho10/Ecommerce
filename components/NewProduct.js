import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import {Product} from '../Constant/data'
import { styles } from './style'

const NewProduct = () => {
  return (
    <>
        <Text style={{height: 1, borderColor: 'black', borderWidth: 2, marginTop: 15}} />
        <View style={styles.Main}>
            <Text style={{fontSize: 20, fontWeight: 600}}>New Product</Text>
            <ScrollView style={{padding: 15}} horizontal showsHorizontalScrollIndicator={false}>
                {
                    Product.map(pro => (
                        <View style={{marginRight: 30, alignItems: 'center'}}>
                            <Image source={pro.image} style={{width: 100, height: 100, borderRadius: '50%'}} />
                            <Text style={{marginTop: 10, fontWeight: 500}}>{pro.name}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    </>
  )
}

export default NewProduct