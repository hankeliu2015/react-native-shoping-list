import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from './components/Header'

const App = () => {
  return (
    <View style={Styles.container}>
      <Header />
      <Image source={{uri: 'https://res.cloudinary.com/dcyxkrt7p/image/upload/v1598298388/CatIcon.png'}} style={Styles.img} />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1, 
    // paddingTop: 60,
    // justifyContent: 'center',
    // alignItems: 'center',
  }, 
  text: {
    color: 'darkslateblue',
    fontSize: 40,
  }, 
  img: {
    width: 100,
    height: 100,
    borderRadius:100/2,
    borderWidth: 2,
    borderColor: '#00ff00'
  }
})

export default App;