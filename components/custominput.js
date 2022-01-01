import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const UserInput= props =>(
  <Input
  containerStyle={[styles.input, props.style]}
  inputContainerStyle={{borderBottomWidth:0, height:55}}
  placeholder={props.placeholder}
  placeholderTextColor={props.placeholderTextColor}
  onChangeText={props.onChangeText}
  {...props}
  />
);

export default UserInput;

const styles= StyleSheet.create({
  input:{
    width:"80%",
    height:55,
    borderWidth:1.5,
    borderColor:"#FFFFFF",
    fontSize:20,
    alignItems:"center"
  }
})