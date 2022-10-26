import { View, TextInput } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
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
      <Feather
        name={props.iconName}
        size={20}
        color={Colors.black}
        style={{ padding: 5, alignSelf: "center" }}
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
