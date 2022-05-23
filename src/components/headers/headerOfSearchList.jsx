import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import Entypo from  "react-native-vector-icons/Entypo"
import AntDesign from  "react-native-vector-icons/AntDesign"
import Ionicons from  "react-native-vector-icons/Ionicons"


const HeaderOfSearchList = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>fromOriginal</Text>
      
        <Entypo  name='dot-single' size={30} color ={"black"}/> 
        <View style={{marginHorizontal:10, marginRight: 17}}>
        <AntDesign  name='minus' size={20} color ={"black"}/> 
 
        </View>
        <Ionicons  name='square' size={10} color ={"black"}/> 
       
        <Text style={styles.text}>toDestination</Text>
    </View>
  )
}

export default HeaderOfSearchList
const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    text: {
        padding:10,
        borderWidth:1,
        borderRadius:50,
        marginHorizontal: 10
    },
    
})