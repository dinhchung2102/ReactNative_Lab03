import { React, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";

export default function XMEye() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.container}>
      <View style={styles.viewEye}>
        <Image source={require("../assets/eyeball.png")} />
      </View>

      <View style={styles.viewInput}>
        <View style={styles.viewUserName}>
          <Image
            source={require("../assets/user-new-icon.png")}
            style={styles.userIcon}
          />
          <TextInput
            value={userName}
            onChangeText={setUserName}
            placeholder="Please input user name"
            style={styles.inputUserName}
          />
        </View>

        <View style={styles.viewPassword}>
          <Image
            source={require("../assets/lock-new-icon.png")}
            style={styles.lockIcon}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Please input password"
            secureTextEntry={!isPasswordVisible}
            style={styles.inputPassword}
          />
        </View>
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.viewRegister}>
          <TouchableOpacity>
            <Text style={styles.textRegister}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textRegister}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.viewLine}>
        <View style={styles.line} />
        <Text style={styles.text}>Other Login Methods</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.viewLogin}>
        <TouchableOpacity>
          <Image source={require("../assets/user-plus-icon.png")} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("../assets/wifi-icon.png")} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("../assets/fb-new-icon.png")} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  //1
  viewEye: {
    flex: 2.5,
    justifyContent: "center",
  },
  //2
  viewInput: {
    flex: 1.5,
    width: "85%",
  },
  viewUserName: {
    flexDirection: "row",
    marginBottom: 50,
    borderBottomColor: "blue",
    borderBottomWidth: 1,
  },
  inputUserName: {
    paddingBottom: 10,
    marginLeft: 15,
    fontSize: 17,
  },
  userIcon: {},
  viewPassword: {
    flexDirection: "row",
    borderBottomColor: "blue",
    borderBottomWidth: 1,
  },
  inputPassword: {
    paddingBottom: 10,
    marginLeft: 15,
    fontSize: 17,
  },
  //3=======================
  viewButton: {
    flex: 1.5,
    width: "85%",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 10,
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  viewRegister: {
    flexDirection: "row",
    paddingTop: 30,
    justifyContent: "space-between",
  },
  textRegister: {
    fontSize: 17,
  },
  //4============
  viewLine: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    marginBottom: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "blue",
  },
  viewLogin: {
    flex: 1.5,
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
  },
});
