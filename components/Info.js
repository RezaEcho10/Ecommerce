import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const Info = () => {
  return (
    <View style={styles.Info}>
          <Ionicons name="location-outline" size={24} />
          <Pressable>
            <Text style={styles.Infotxt}>Deliver to Reza - Newyork +155566</Text>
          </Pressable>
          <MaterialIcons name='keyboard-arrow-down' size={24} color='black' />
        </View>
  )
}

export default Info