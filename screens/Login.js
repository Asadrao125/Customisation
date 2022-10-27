import { View, StyleSheet, ToastAndroid } from "react-native";
import { React, useState } from "react";
import Button from "../components/Button";
import TextInputComponent from "../components/TextInputComponent";
import AppHeader from "../components/AppHeader";
import Colors from "../constants/Colors";
import IconsArray from "../assets/Icons/IconsArray";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState({ value: "" });
  const [email, setEmail] = useState({ value: "" });
  const [password, setPassword] = useState({ value: "" });

  validateLogin = () => {
    if (username === "") {
      ToastAndroid.show("Enter Username", ToastAndroid.SHORT);
    } else if (email === "") {
      ToastAndroid.show("Enter Email", ToastAndroid.SHORT);
    } else if (password === "") {
      ToastAndroid.show("Enter Password", ToastAndroid.SHORT);
    } else {
      navigation.replace("Home", {
        username: username,
        email: email,
        password: password,
      });
    }
  };

  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <AppHeader
        statusBarColor={Colors.darkGreen}
        title="Login"
        navigation={navigation}
        headerBg={Colors.green}
        iconColor={Colors.white}
      />

      <View style={styles.container}>
        <TextInputComponent
          onChange={(value) => {
            setUsername(value);
          }}
          width="90%"
          keyboardType="text"
          placeholderText="Username"
          borderColor={Colors.black}
          borderRadius={10}
          autoFocus={false}
          secureKeyboard={false}
          borderWidth={1}
          imagePath={IconsArray.username}
        />

        <TextInputComponent
          onChange={(value) => {
            setEmail(value);
          }}
          width="90%"
          keyboardType="email-address"
          placeholderText="Email"
          borderColor={Colors.black}
          borderRadius={10}
          autoFocus={false}
          secureKeyboard={false}
          borderWidth={1}
          imagePath={IconsArray.email}
        />

        <TextInputComponent
          onChange={(value) => {
            setPassword(value);
          }}
          width="90%"
          keyboardType=""
          placeholderText="Password"
          borderColor={Colors.black}
          borderRadius={10}
          autoFocus={false}
          secureKeyboard={true}
          borderWidth={1}
          imagePath={IconsArray.password}
        />

        <Button
          fontSize={20}
          textColor={Colors.white}
          width={"50%"}
          height={40}
          text="Login"
          backgroundColor={Colors.darkGreen}
          btnPress={() => validateLogin()}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
