import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Header = (props) => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.text}>{props.title}</Text>
       {/* <Image source={{uri: 'https://res.cloudinary.com/dcyxkrt7p/image/upload/v1598298388/CatIcon.png'}} style={Styles.img} /> */}
    </View>
  )
}

Header.defaultProps = {
  title: "Shopping List Title by Default"
}
const Styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  }, 
  text: {
    color: '#696969',
    fontSize: 23,
    textAlign: 'center'
  }, 
  img: {
    width: 100,
    height: 100,
    borderRadius:100/2,
    borderWidth: 2,
    borderColor: '#00ff00', 
  
  }
})

export default Header;