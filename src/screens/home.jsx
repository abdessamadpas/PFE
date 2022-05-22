import { View, Text,SafeAreaView  } from 'react-native'
import React from 'react'
import Header from '../components/header'
import SearchBar from '../components/searchBar'
const Home = () => {
  return (
      <SafeAreaView >
       <View style={{backgroundColor:'white', padding: 15}}> 
        <Header/>
        <SearchBar />
        
       </View>
       
        
      </SafeAreaView>
    
  )
}

export default Home