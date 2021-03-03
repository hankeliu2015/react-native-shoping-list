import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from './components/Header'

const App = () => {

  
  return (
    <View style={Styles.container}>
      <Header title="Shopping List"/>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1, 
    // paddingTop: 60,
    // justifyContent: 'center',
    // alignItems: 'center',
  } 
})

export default App;