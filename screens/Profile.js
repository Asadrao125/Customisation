import { View, Text } from "react-native";
import React from "react";
import AppHeader from "../components/AppHeader";
import Colors from "../constants/Colors";

const Profile = ({ navigation }) => {
  return (
    <View>
      <AppHeader
        title="Profile"
        back
        navigation={navigation}
        headerBg={Colors.green}
        iconColor={Colors.white}
      />
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
