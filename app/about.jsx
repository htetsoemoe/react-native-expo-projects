import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function about() {
  return (
    <View style={styles.about}> // View is a built in flex box component
      <Text>About Us</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    about: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})