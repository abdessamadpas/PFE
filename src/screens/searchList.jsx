import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import HeaderOfSearchList from '../components/headers/headerOfSearchList'
import List from '../components/listSearch/list'

const SearchList = () => {
  return (
      <SafeAreaView>
    <View style={{ alignSelf:'center', marginTop: 40}} >

        <HeaderOfSearchList/>
        <List/>
        
    </View>
    </SafeAreaView>
  )
}

export default SearchList