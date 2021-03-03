import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ListItem = (props) => {
  return (
    <TouchableOpacity style={Styles.listItem}>
        <View style={Styles.listItemView}>
          <Text style={Styles.listItemText}>
          {props.item.text}
            </Text>
          </View>
      </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
  
})

export default ListItem;