import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Home  from './src/screens/home'
import SearchList from './src/screens/searchList';
export default function App() {
  return (
    <View>
      <SearchList/>
     
    </View>
  );
}

