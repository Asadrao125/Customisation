import { View, StyleSheet, ToastAndroid } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import TextInputComponent from "../components/TextInputComponent";
import AppHeader from "../components/AppHeader";
import Colors from "../constants/Colors";
import IconsArray from "../assets/Icons/IconsArray";

const Login = ({ navigation }) => {
  const [user, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  validateLogin = () => {
    if (user.username == "") {
      ToastAndroid.show("Enter Username", ToastAndroid.SHORT);
    } else if (user.email == "") {
      ToastAndroid.show("Enter Email", ToastAndroid.SHORT);
    } else if (user.password == "") {
      ToastAndroid.show("Enter Password", ToastAndroid.SHORT);
    } else {
      navigation.replace("Home", {
        username: user.username,
        email: user.email,
        password: user.password,
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
          width="90%"
          keyboardType="text"
          placeholderText="Username"
          borderColor={Colors.darkGreen}
          borderRadius={10}
          autoFocus={false}
          secureKeyboard={false}
          borderWidth={1}
          imagePath={IconsArray.username}
          iconColor={Colors.black}
          onChange={(value) => setUserData({ ...user, username: value })}
          value={user.username}
        />

        <TextInputComponent
          width="90%"
          keyboardType="email-address"
          placeholderText="Email"
          borderColor={Colors.darkGreen}
          borderRadius={10}
          autoFocus={false}
          secureKeyboard={false}
          borderWidth={1}
          imagePath={IconsArray.email}
          iconColor={Colors.black}
          onChange={(value) => setUserData({ ...user, email: value })}
          value={user.email}
        />

        <TextInputComponent
          width="90%"
          keyboardType=""
          placeholderText="Password"
          borderColor={Colors.darkGreen}
          borderRadius={10}
          autoFocus={false}
          secureKeyboard={true}
          borderWidth={1}
          imagePath={IconsArray.password}
          iconColor={Colors.black}
          onChange={(value) => setUserData({ ...user, password: value })}
          value={user.password}
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
