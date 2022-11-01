import { View, StyleSheet, TouchableOpacity } from "react-native";
import { React } from "react";
import AppHeader from "../components/AppHeader";
import Colors from "../constants/Colors";
import IconsArray from "../assets/Icons/IconsArray";
import Data from "../constants/Data";
import TextComponent from "../components/TextComponent";
import Icon from "../components/Icon";

const Home = ({ route, navigation }) => {
  const { username, email, password } = route.params;
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <AppHeader
        statusBarColor={Colors.darkGreen}
        menu
        title="Home"
        navigation={navigation}
        right={IconsArray.setting}
        rightFunction={() => navigation.navigate("Settings")}
        optionalIcon={IconsArray.bell}
        optionalFunc={() => navigation.navigate("Notifications")}
        headerBg={Colors.green}
        iconColor={Colors.white}
        optionalBadge={Data.length}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <TextComponent fontSize={30}>Welcome - {username}</TextComponent>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Icon imagePath={IconsArray.email} iconColor={Colors.green} />
          <TextComponent fontSize={15}>{email}</TextComponent>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Icon imagePath={IconsArray.password} iconColor={Colors.green} />
          <TextComponent fontSize={15}>{password}</TextComponent>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    //justifyContent: "center",
    flexDirection: "column",
    padding: 20,
  },
});
