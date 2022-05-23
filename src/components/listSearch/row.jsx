import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Row = () => {
  return (
    <View style={styles.container}>
      <Text> wewe</Text>
    </View>
  )
}

export default Row
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})