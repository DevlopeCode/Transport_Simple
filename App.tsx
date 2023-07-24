import React from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const App =()=>{
return <View style={{flex:1}}>
<LinearGradient
  start={{x: 0.0, y: 0.25}} end={{x: 0, y:1.5}}
  locations={[0.0,0.99,0.2]}
  colors={['#868BFE', '#FFFFFF']} 
  style={{flex:0.5}}>
 
</LinearGradient>
<LinearGradient
  start={{x: 0.0, y: 0.25}} end={{x: 0, y:1.5}}
  locations={[0.0,0.99,0.2]}
  colors={['#F89623', '#FFFFFF']} 
  style={{flex:0.5}}>
 
</LinearGradient>
<LinearGradient
start={{x: 0.0, y: 0.25}} end={{x: 0, y:1.5}}
locations={[0.0,0.99,0.2]}
style={{flex:0.5}}
 colors={['#29c0a3', '#FFFFFF']}
 
 />

</View> 


}
export default App