import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { 
    View, 
    TouchableOpacity, 
    Image, 
    Text,
    TextInput,
    StyleSheet,
} from "react-native";

export default function Screen_1d() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    return (
        <LinearGradient
            colors={['#ffffff', '#ffffff']}
            style={styles.container}
        >
            <View style={styles.viewHeader}>
                <Text style={styles.textHeader}>LOGIN</Text>
            </View>
            <View style={styles.viewLogin}>
                <TextInput 
                    style={styles.textEmail}
                    placeholder="Email"
                    value={mail}
                    onChangeText={setMail}
                    keyboardType="email-address"
                />
                <View style={styles.viewPassword}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity
                        style={styles.eyeIconContainer}
                        onPress={() => setPasswordVisible(!isPasswordVisible)}
                    >
                        <Image
                            source={require('../assets/eye-icon.png')}
                            style={styles.eyeIcon}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewText}>
                <Text>When you agree to terms and conditions</Text>
                <TouchableOpacity>
                    <Text style={{color: 'blue'}}>Forgot your password</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Or login with</Text>
            </View>
            <View style={styles.viewIcon}>
                <TouchableOpacity style={styles.iconFB}>
                    <Image
                        source={require('../assets/fb-icon.png')}
                        style={{height: 45, width: 30}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconZalo}>
                    <Image
                        source={require('../assets/icon-zalo.png')}
                        style={{width: 30, height: 30}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconGG}>
                    <Image
                        source={require('../assets/google-icon.png')}
                        style={{width: 40, height: 40}}
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewHeader: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    viewLogin: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 4
    },
    textEmail: {
        backgroundColor: '#C4C4C4',
        width: '85%',
        height: 50,
        paddingLeft: 10,
        fontSize: 20,
        borderRadius: 30,
        marginBottom: 20,
        paddingLeft: 20
    },
    viewPassword: {
        flexDirection: 'row',
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        height: 50,
        width: '85%',
        borderRadius: 30,
        marginBottom: 20
    },
    textInput: {
        flex: 1,
        fontSize: 20,
        backgroundColor: '#C4C4C4',
        borderRadius: 30,
        paddingLeft: 20
    },
    eyeIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10
    },
    eyeIcon: {
        width: 32,
        height: 30,
    },
    button: {
        marginTop: 40,
        backgroundColor: 'red',
        width: '85%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    textButton: {
        fontSize: 29,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    viewText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    viewIcon: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    iconFB: {
        backgroundColor: '#25479B',
        alignItems: 'center',
        width: '26%',
        height: 50,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    iconZalo: {
        backgroundColor: '#41A0D7',
        width: '26%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconGG: {
        borderWidth: 1,
        borderColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width: '26%',
        height: 50,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    }
});
