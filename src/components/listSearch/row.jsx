import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Row = () => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.container}>
      <CorpoImg/>
      <CarpoInfo/>
      
    </View>
    </TouchableOpacity>
    
  )
}

export default Row
const styles = StyleSheet.create({
    container: {
      //  flexDirection: 'row',
       marginTop:10,
      // borderRadius: 20,
       backgroundColor: 'white',
//      alignItems: 'center',
      padding:20


        
    },
    text: {
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
      marginTop: 2 
    ,
      paddingVertical:5 
    }
})
const CorpoImg =()=>(
  <Image source={{uri:'https://accept.aseanenergy.org/wp-content/uploads/2020/01/carpooling-e1580179092444-1440x300.jpg'
    }}     
   style={{ padding:10 ,width: "100%", height:180}}

  />)
const CarpoInfo=()=>(
  <>
  <View style={styles.text}>
  <Text style={{fontSize:15, fontWeight:'bold'}}> cars from to</Text>
  <View style={{backgroundColor:'#eee', height:30, width:40, alignItems:'center',justifyContent: 'center', borderRadius:15}}>
    <Text> 50$</Text>
  
 </View>
  </View>
  <View >
  <Text style={{fontSize:15, color:'grey'}}>4-5 min</Text>

  
 </View>
 </>
)

