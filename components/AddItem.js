import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = (props) => {
  const [text, setText] = useState('""'); 

  const onChange = textValue => setText(textValue);
   
  return (
    <View>
      <TextInput placeholder="Add Item..." style={Styles.input} onChangeText={onChange} />
      <TouchableOpacity style={Styles.btn} onPress={() => props.addItem(text)}>
        <Text style={Styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item 
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
  input: {
    height: 60, 
    padding: 8, 
    fontSize: 16
  },
  btn: {
    backgroundColor: '#c2bad8', 
    padding: 9, 
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20, 
    textAlign: 'center', 
  }
})

export default AddItem;