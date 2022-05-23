import { View, Text, TextInput} from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={{  marginHorizontal: 10, marginVertical: 10}} >
      <Search  style={{backgroundColor: '#eee',  marginHorizontal: 10}} text='from'/> 
      <Search  style={{backgroundColor: '#eee', marginHorizontal: 10}} text='to'/> 

    </View>
  )
}

export default SearchBar

const Search =(props)=>{
    return(
    <View  style= {{
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: "white",
        borderWidth: 1  ,
        marginVertical: 5,
        
    }}>
        <TextInput  style = {{paddingHorizontal: 20}}placeholder={props.text} />
    </View>
)}