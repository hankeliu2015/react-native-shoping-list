import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header'; 
import ListItem from './components/ListItem'
// import { uuid } from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text:'Milk'}, 
    {id: 2, text:'Egg'}, 
    {id: 3, text:'Bread'}, 
    {id: 4, text:'Bacon'}, 
  ]);

  return (
    <View style={Styles.container}>
      <Header title="Shopping List"/>
      <FlatList 
        data={items}
        renderItem={({item}) => <ListItem item={item}/>} 
        />
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