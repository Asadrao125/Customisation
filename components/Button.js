import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonCom = (props) => {
  return (
    <TouchableOpacity
      onPress={props.btnPress}
      style={{
        marginTop: 20,
        width: props.width,
        height: props.height,
        elevation: 3,
        backgroundColor: props.backgroundColor,
        borderRadius: 10,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          textAlignVertical: "center",
          color: props.textColor,
          fontSize: props.fontSize,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCom;
