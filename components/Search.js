import { View, Pressable, TextInput } from 'react-native'
import React from 'react'
import {styles} from './style'
import { AntDesign, Feather } from '@expo/vector-icons'

const Search = () => {
  return (
    <View style={styles.SearchBox}>
          <Pressable style={styles.SearchInput}>
            <AntDesign name='search1' size={25} />
            <TextInput placeholder="Search in Amazon" style={{color: 'grey', marginLeft: 10}}  />
          </Pressable>
          <Feather name="mic" size={25} />
    </View>
  )
}

export default Search