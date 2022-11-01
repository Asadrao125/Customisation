import React from "react";
import { Image } from "react-native";

export default function ImageComponentSimple(props) {
  return (
    <Image
      source={{
        uri: props.url,
      }}
      style={{
        width: props.width,
        height: props.height,
      }}
    />
  );
}
