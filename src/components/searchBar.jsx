import { View, Text, TextInput} from 'react-native'
import React from 'react'

const SearchBar = (props) => {
  return (
    <View style={{backgroundColor: '#eee', marginHorizontal: 10, marginVertical: 10}}>
      <Search text='from'/> 
      
    </View>
  )
}

export default SearchBar

const Search =(props)=>{
    return(
    <View  style= {{
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: "white"
        
    }}>
        <TextInput placeholder={props.text} />
    </View>
)}