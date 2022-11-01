import React from "react";
import { Text } from "react-native";

export default function TextComponent(props) {
  return (
    <Text
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        //height: props.height,
        color: props.textColor,
        textAlignVertical: "center",
        //alignSelf: "center",
      }}
    >
      {props.children}
    </Text>
  );
}
