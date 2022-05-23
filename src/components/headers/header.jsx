import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Header = () => {
  const [activetab, setActivetab] = useState("Home") 
  return (
    <View style={{flexDirection:'row', alignSelf:'center', marginTop: 40}}>
    <HeaderButton 
      text="Home"
      colorbtn='white'
      textcolor='black'
      activetab={activetab}
      setActivetab={setActivetab}
      />
      <HeaderButton 
      text="Search"
      colorbtn='black'
      textcolor='white'
      activetab={activetab}
      setActivetab={setActivetab}
      />
      
    </View>
  )
}

export default Header


const HeaderButton =(props)=>(
    <View>
        <TouchableOpacity 
        style={{
            backgroundColor: props.activetab === props.text ? 'black' : 'white',
            borderRadius: 30,
            paddingVertical: 6,
            paddingHorizontal: 16,
            marginVertical: 10,
            
        }}
        onPress={()=>props.setActivetab(props.text)}
        >
            <Text style={{
                color: props.activetab === props.text ? "white" : "black",
                fontSize:15,
                fontWeight:"900"
            }}> {props.text}</Text>
        </TouchableOpacity>
    
    </View>
    )
