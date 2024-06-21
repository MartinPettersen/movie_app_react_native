import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HomePage from '../components/(home)/HomePage'

const TVScreen = () => {
  return (
    <View style={styles.background}>
        
    <HomePage />
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        flex:1,
      backgroundColor: "black"
    }
  });

export default TVScreen