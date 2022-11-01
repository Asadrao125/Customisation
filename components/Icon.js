import React from "react";
import { Image } from "react-native";

export default function ImageComponentSimple(props) {
  return (
    <Image
      style={{
        width: 20,
        height: 20,
        tintColor: props.iconColor,
        margin: 5,
      }}
      source={props.imagePath}
    />
  );
}
