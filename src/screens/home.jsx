import { View, Text,SafeAreaView  } from 'react-native'
import React from 'react'
import Header from '../components/headers/header'
import SearchBar from '../components/searchBar/searchBar'
import AutoComplate from '../components/googleAutocomplate/autoComplate'
const Home = () => {
  return (
      <SafeAreaView >
       <View style={{backgroundColor:'white', padding: 15}}> 
        <Header/>
        <AutoComplate/>
       </View>  
      </SafeAreaView>
    
  )
}

export default Home
