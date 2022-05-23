import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import HeaderOfSearchList from '../components/headers/headerOfSearchList'
import List from '../components/listSearch/list'
import Header from '../components/headers/header'


const SearchList = () => {
  return (
    <SafeAreaView  style={{ backgroundColor: '#dbd7d7'}}>
    <Header/>
    <View style={{ backgroundColor: 'white' , paddingHorizontal: 10, marginTop: 5}} >

        <HeaderOfSearchList/>
        
        </View>
        <List/>
   
    </SafeAreaView>
  )
}

export default SearchList