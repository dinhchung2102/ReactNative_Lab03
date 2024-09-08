import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import First_Screen from './screen/First_Screen';
import Screen_1a from "./screen/Screen_1a";
import Screen_1b from "./screen/Screen_1b";
import Screen_1c from "./screen/Screen_1c";
import Screen_1d from "./screen/Screen_1d";
import Screen_1e from "./screen/Screen_1e";
//import Screen_1c from './screen/Screen_1c';

const App = () => {
  return(
    <SafeAreaView style = {styles.container}>
     <Screen_1e />  
    </SafeAreaView>
  )
  // Replace <Screen_1 /> with the desired screen component based on your needs
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App;