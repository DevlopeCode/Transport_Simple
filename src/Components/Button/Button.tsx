import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { vs } from "react-native-size-matters";
const CButton = ({colors="#868BFE",title="Submit",pading=10})=>{
  return (
    <TouchableOpacity style={{height:vs(50),backgroundColor:colors,marginHorizontal:20}}>
     <Text>{title}</Text>
    </TouchableOpacity>
  )
}