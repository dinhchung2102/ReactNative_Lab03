import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function Screen_2a() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setPasswordVisible] = useState(false)
    return( 
        <LinearGradient
          colors={['#FBCB00', '#BF9A00']}
          style ={styles.container}
        >
        <View style ={styles.viewHeader}>
          <Text style ={styles.textHeader}>LOGIN</Text>
        </View>
        <View style ={styles.viewInput}>
          <View style = {styles.viewInputName}>
            <Image
              source={require('../assets/avatar_user 1.png')}
              style = {styles.userIcon}
            />
            <TextInput 
              value={name}
              onChangeText={setName}
              placeholder="Name"
              style = {styles.inputName}
            />
          </View>
          <View style = {styles.viewInputPassword}>
            <Image
              source={require('../assets/lock-icon.png')}
              style = {styles.lockIcon}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                style = {styles.textInputPassword}
                secureTextEntry = {!isPasswordVisible}
            />
            <TouchableOpacity
            onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
            <Image 
              source={require('../assets/eye-icon.png')}
              style ={styles.eyeIcon}
            />
            
            </TouchableOpacity>
            
          </View>
            
        </View>
        <View style ={styles.viewButton}>
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.textButton}>
                    LOGIN
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style = {styles.textCreate}>
                CREATE ACCOUNT
            </Text>
            </TouchableOpacity>
            
        </View>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    //1. Style Header
    viewHeader:{
        flex:3,
        justifyContent: 'center'
    },
    textHeader:{
        fontSize:35,
        fontWeight: 'bold',
        paddingLeft: 50
    },
    //2. Style Input: inputName & inputPassword
    viewInput: {
        flex: 3,
        alignItems: 'center'
    },
    //==============
    //2.1. InputName:
    viewInputName:{
        flexDirection: 'row',
        width: '85%',
        height: '20%',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1
    },
    userIcon:{
        height: 40,
        width: 40,
        marginLeft: 10
    },
    inputName:{
        height: '100%',
        width: '100%',
        marginLeft: 20,
        fontSize: 20,
    },
    //2.2 Input Password:
    viewInputPassword:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white', 
        borderWidth: 1,
        width: '85%',
        height: '20%',
        marginTop: 20
    },
    lockIcon:{
        width: 40,
        height:40,
        paddingLeft: 10
    },
    textInputPassword:{
        marginLeft: 20,
        fontSize: 20,
        marginRight: 150
    },
    eyeIcon:{
        width: 55,
        height: 50,
    },
    //3. ViewButton: Login button & create account button
    viewButton:{
        flex: 4,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    button:{
        width: '85%',
        height: '13%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    textButton: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    textCreate:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})