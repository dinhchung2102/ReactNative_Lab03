import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function First_Screen() {
  return (
    //background: linear-gradient(180deg, #00CCF9 0%, #00CCF9 100%);

    <LinearGradient 
    colors={['#00CCF9', '#00CCF9']}
    style = {styles.container}>
      <View style = {styles.viewCircle}>
        <View style = {styles.circle}/>
      </View>
      <View style = {styles.viewHead}>
        <Text style = {styles.textHead}>GROW</Text>
        <Text style = {styles.textHead}>YOUR BUSSINESS</Text>
      </View>
      <View style = {styles.viewBody}>
        <Text  style = {styles.textBody}>We will help you to grow your bussiness using online server</Text>
      </View>
      <View style = {styles.viewButton}>
        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.textButton}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff'
  },
  viewCircle: {
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle:{
    width:250,
    height: 250,
    borderRadius: 125,
    borderWidth: 25,
    borderColor: 'black',
  },
  viewHead: {
    flex: 1.5, 
    // backgroundColor:'blue',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  textHead: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold'
  },
  viewBody: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'blue'
  },
  textBody:{
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center'
  },
  viewButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  button: {
    height: 70,
    width: 180,
    backgroundColor: '#E3C000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  textButton: {
    fontSize: 35,
    fontWeight: 'bold'
  }
});
