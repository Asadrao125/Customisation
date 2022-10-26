import { View, Text, StyleSheet } from "react-native";
import { React } from "react";
import AppHeader from "../components/AppHeader";
import Colors from "../constants/Colors";

const Home = ({ route, navigation }) => {
  const { username, email, password } = route.params;
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <AppHeader
        statusBarColor={Colors.darkGreen}
        menu
        title="Home"
        navigation={navigation}
        right="more-vertical"
        rightFunction={() => navigation.navigate("Settings")}
        optionalIcon="bell"
        optionalFunc={() => navigation.navigate("Notifications")}
        headerBg={Colors.green}
        iconColor={Colors.white}
        optionalBadge={10}
      />
      <View style={styles.container}>
        <Text style={{ padding: 10 }}>Welcome - {username}</Text>
        <Text style={{ padding: 10 }}>{email}</Text>
        <Text style={{ padding: 10 }}>{password}</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    flexDirection: "column",
  },
});
