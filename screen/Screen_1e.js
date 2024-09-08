import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TextInput, StyleSheet, Image , TouchableOpacity} from "react-native";

export default function Screen_1e() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [birthday, setBirthday] = useState('');

  const [isCheckedMale, setCheckedMale] = useState(false);
  const [isCheckedFemale, setCheckedFemale] = useState(false);

  const handleFemalePress = () => {
    setCheckedFemale(true);
    setCheckedMale(false);
  };

  const handleMalePress = () => {
    setCheckedMale(true);
    setCheckedFemale(false);
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#ffffff']}
      style={styles.container}
    >
      <Text style={styles.textHeader}>REGISTER</Text>

      <View style={styles.viewRegister}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="Phone"
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          value={mail}
          onChangeText={setMail}
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
        />
        <View style = {styles.viewPassword}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            style ={styles.inputPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity style = {styles.icon}
            onPress={() => setPasswordVisible(!isPasswordVisible)}
          >
            <Image 
              source={require('../assets/eye-icon.png')}
              style = {{height: 35, width: 38, paddingRight: 30}}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          value={birthday}
          onChangeText={setBirthday}
          placeholder="Birthday"
          style={styles.input}
        />

        <View style={styles.viewCheckBox}>
          <CheckBox
            title={'Female'}
            checked={isCheckedFemale}
            onPress={handleFemalePress}
            containerStyle={styles.checkboxContainer}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            iconType='font-awesome'
            checkedColor="black"
          />
          <CheckBox
            title={'Male'}
            checked={isCheckedMale}
            onPress={handleMalePress}
            containerStyle={styles.checkboxContainer}
            checkedColor="black"
            checkedIcon={'dot-circle-o'}
            uncheckedIcon={'circle-o'}
          />
        </View>
        <TouchableOpacity style ={styles.button}>
          <Text style = {styles.textButton}>REGISTER</Text>
        </TouchableOpacity>
          <Text style ={styles.text}>
            When you agree to tearms and conditions
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: '20%',
  },
  viewRegister: {
    width: '85%',
    alignItems: 'center',
    paddingTop: '10%',
  },
  input: {
    width: '100%',
    marginTop: '5%',
    height: '8%',
    paddingLeft: 10,
    backgroundColor: '#C4C4C4',
    color: 'black',
  },
  viewPassword:{
    marginTop:'5%',
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputPassword: {
    backgroundColor: '#C4C4C4',
    width: '90%',
    height: '100%',
    paddingLeft:10
  },
  icon:{
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '10%',
    paddingRight:5
  },
  viewCheckBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 20,
  },
  checkboxContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
  },
  button: {
    width: '100%',
    height: '8%',
    backgroundColor: 'red',
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 20
  },
  textButton:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  text:{
    marginTop: 30,
    fontSize: 15
  }
});
