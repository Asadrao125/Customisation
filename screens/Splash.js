import { View, StyleSheet, Image, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import Colors from "../constants/Colors";
import IconsArray from "../assets/Icons/IconsArray";
import TextComponent from "../components/TextComponent";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "stretch",
          resizeMode: "cover",
          justifyContent: "center",
          alignItems: "center",
        }}
        source={IconsArray.splash_bg}
      >
        <View style={{ flexDirection: "column" }}>
          <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              padding: 5,
              marginLeft: 10,
            }}
            source={IconsArray.app_icon}
          />
          <TextComponent
            fontSize={25}
            textColor={Colors.white}
            fontWeight={"400"}
          >
            Customizations
          </TextComponent>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
