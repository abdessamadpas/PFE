import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <HeaderButton text="wewe"/>
      <HeaderButton text="wewe2"/>
    </View>
  )
}

export default Header


const HeaderButton =(props)=>(
    <View>
        <Text> {props.text}</Text>
    </View>
    )
