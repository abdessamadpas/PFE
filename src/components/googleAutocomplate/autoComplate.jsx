import { View, Text } from 'react-native'
import React ,{ useState }from 'react'
import { styles } from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

//const API = 'AIzaSyBuIe8cxae1ftYK6QNd22xTPV-1MWfWSH4'

const AutoComplate = () => {
  const [fromOriginal,setFromOriginal]= useState('')
  const [toDestinatioon, setToDestinatioon] = useState('')

  return (
    <View style={styles.container}>
    <GooglePlacesAutocomplete
    placeholder='Enter Location'
    minLength={2}
    autoFocus={false}
    returnKeyType={'default'}
    fetchDetails={true}
    enablePoweredByContainer={false}

    suppressDefaultStyles
        styles={{
          textInput:styles.textInput,
            container: {
             
              position : 'absolute' ,
              top :10,
              left: 10,
              right: 10,
              
              
            },
            listView: {
              position:'absolute',
              top:120,
              paddingHorizontal: 20,
              paddingVertical:10,
              
            },
            separator:{
              backgroundColor:'#b4b4b4',
              height:1,
              marginHorizontal : 70,
              marginVertical: 1,
             
            },
            row: {
              backgroundColor: '#FFFFFF',
              padding: 10,
              height: 50,
              flexDirection: 'row',
            },
          }}
          
  
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      setFromOriginal(details.geometry.location)

      console.log(fromOriginal);
    }}
    query={{
      key: 'AIzaSyBuIe8cxae1ftYK6QNd22xTPV-1MWfWSH4',
      language: 'en',
    }}
  />
  <GooglePlacesAutocomplete
        placeholder='Where To'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setToDestinatioon(details.geometry.location)
          console.log(toDestinatioon);
        }}
        suppressDefaultStyles
        enablePoweredByContainer={false}
        styles={{
          textInput:styles.textInput,
          container: {
            position : 'absolute' ,
            top : 70,
            left: 10,
            right: 10,
            
            
          },
          listView: {
            position:'absolute',
            top:60,
            paddingHorizontal: 20,
            paddingVertical:10,
          },
          separator:{
            backgroundColor:'#b4b4b4',
              height:1,
              marginHorizontal : 70,
              marginVertical: 1,
          },
          row: {
            backgroundColor: '#FFFFFF',
            padding: 5,
            height: 50,
            flexDirection: 'row',
          },
        }}
        fetchDetails={true}
      
        query={{
          key: 'AIzaSyBuIe8cxae1ftYK6QNd22xTPV-1MWfWSH4',
          language: 'en',
        }}
       // renderRow={(data)=><PlaceRow data={data}/ >}
      />  
      </View>
  )
}

export default AutoComplate