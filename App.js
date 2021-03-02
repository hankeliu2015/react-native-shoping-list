import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Hello World</Text>
      <Image source={{uri: 'https://res.cloudinary.com/dcyxkrt7p/image/upload/v1598298388/CatIcon.png'}} style={Styles.img} />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  text: {
    color: 'darkslateblue',
    fontSize: 40,
  }, 
  img: {
    width: 100,
    height: 100,
  }
})

export default App;