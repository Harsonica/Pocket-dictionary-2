import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Text, TextInput } from 'react-native';
import {Header} from 'react-native-elements';
import homeScreen from '../homeScreen';
import dictionary from '../database';
export default class HomeScreen extends Component

var word = dictionary[tect]["word"]
var lexicalCategory = dictionary[text]["lexicalCategory"]
var definition = dictionary[text]["definition"]
export default function App() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}
this.setState({
  "word":word,
  "lexicalCategory":lexicalCategory,
  "definition":definition
})
getWord=(text)=>{
  var text = text.toLowerCase()
  try{
    var word = dictionary[text]["word"]
    var lexicalCategory= dictionary[text]["word"]
    var definition= dictionary[text]["definition"]
    this.setState({
      "word":word,
      "lexicalCategory":lexicalCategory,
      "definition":definition,


    })
  }
  catch(err){
    alert("Sorry this word is not availible for now ")
    this.setState{(
      'text':'',
      'isSearchPressed':false
    )}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBoxContainer:{
    flex:0.3,
    alignItems:'center'
  },
  inputBox:{
    width:'80%',
    alignSelf:'center',
    height:40,
  }
   
});
