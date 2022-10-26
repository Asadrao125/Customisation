import { View, Text } from "react-native";
import React from "react";
import AppHeader from "../components/AppHeader";
import Colors from "../constants/Colors";

const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <AppHeader
        title="Settings"
        back
        navigation={navigation}
        headerBg={Colors.green}
        iconColor={Colors.white}
      />

      <View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1, flexDirection: "row" }}></View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
