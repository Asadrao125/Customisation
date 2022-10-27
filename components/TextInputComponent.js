import { View, TextInput, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const TextInputComponent = (props) => {
  const { value, onChange } = props;

  return (
    <View
      style={{
        borderColor: props.borderColor,
        borderRadius: props.borderRadius,
        borderWidth: props.borderWidth,
        width: props.width,
        padding: 10,
        margin: 10,
        flexDirection: "row",
      }}
    >
      <Image
        style={{
          width: 20,
          height: 20,
          tintColor: Colors.black,
          alignSelf: "center",
          padding: 5,
        }}
        source={props.imagePath}
      />

      <TextInput
        style={{ left: 5 }}
        placeholder={props.placeholderText}
        autoFocus={props.autoFocus}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureKeyboard}
        placeholderTextColor={props.borderColor}
        onChangeText={(value) => onChange(value)}
        value={value}
        width={props.width}
      />
    </View>
  );
};

export default TextInputComponent;
