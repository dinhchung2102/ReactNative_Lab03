import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';

export default function Screen_1b() {
    const [text, setText] = useState('');

    return (
        <LinearGradient 
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#E5F4F5', '#00CCF9']}
            style={styles.container}
        >
            <View style={styles.viewIcon}>
                <Image 
                    source={require('../assets/lock-icon.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>FORGET</Text>
                <Text style={styles.textHeader}>PASSWORD</Text>
            </View>
            <View style={styles.viewText}>
                <Text style={styles.textBody}>
                    Provide your account's email for which you want to reset your password
                </Text>
            </View>
            <View style={styles.viewTextInput}>
                <Image
                    source={require('../assets/mail-icon.png')}
                    style={{ height: '40%', width: '15%' }}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="Email"
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewIcon: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    image: {
        height: 180.95 ,
        width: 160.94
    },
    viewHeader: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHeader: {
        fontSize: 45,
        fontWeight: 'bold'
    },
    viewText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBody: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        width: '85%'
    },
    viewTextInput: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#C4C4C4',
        color: 'white',
        height: '40%',
        fontSize: 20,
        width: '70%'
    },
    viewButton: {
        flex: 2,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#E3C000',
        height: '20%',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});
