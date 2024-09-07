import { LinearGradient } from "expo-linear-gradient";
import React, {useState} from "react";
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default function Screen_1c() {
    return(
        <LinearGradient
        colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#E5F4F5', '#00CCF9']}
        style = {styles.container}
        >
            <View style = {styles.viewHeader}>
                <Text style = {styles.textHeader}>CODE</Text>
            </View>
            <View style = {styles.viewHeader2}>
                <Text style = {styles.textHeader2}>VERIFICATION</Text>
            </View>
            <View style = {styles.viewText}>
                <Text style = {styles.textBody}>Enter ontime password sent on</Text>
                <Text style = {styles.textBody}>++849092605798</Text>
            </View>
            <View style = {styles.viewTextInput}>
                <TextInput style = {styles.textInput}/>
                <TextInput style = {styles.textInput}/>
                <TextInput style = {styles.textInput}/>
                <TextInput style = {styles.textInput}/>
                <TextInput style = {styles.textInput}/>
                <TextInput style = {styles.textInput}/>
            </View>
            <View style = {styles.viewButton}>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.textButton}>VERIFY CODE</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:  1
    },
    viewHeader: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHeader:{
        fontSize: 80,
        fontWeight: 'bold'
    },
    viewHeader2:{
        flex: 2,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    textHeader2:{
        fontSize:30,
        fontWeight: 'bold'
    },
    viewText: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-start'
    },
    textBody:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewTextInput: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput:{
        borderWidth:1,
        borderColor: 'black',
        height:50,
        width:50
    },
    viewButton: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        backgroundColor: '#E3C000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '80%'
    },
    textButton:{
        fontSize: 25,
        fontWeight: 'bold'
    }
})