import { View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { Search, Info, Category, Products, NewProduct, ProductItem, Slide } from '../components'

const Home = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <Search />
        <Info />
        <Category />
        <Slide />
        <ScrollView>
          <Products />
        </ScrollView>
        <NewProduct />
        <ProductItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home