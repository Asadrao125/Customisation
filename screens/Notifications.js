import { View, FlatList, StyleSheet, Text } from "react-native";
import AppHeader from "../components/AppHeader";
import Colors from "../constants/Colors";
import ImageComponent from "../components/ImageComponent";
import Data from "../constants/Data";

const ViewItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 10,
        alignItems: "center",
      }}
    >
      <ImageComponent url={item.url} width={50} height={50} />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginLeft: 10,
        }}
      >
        <Text style={{ color: Colors.titleColor }}>{item.title}</Text>
        <Text style={{ color: Colors.gray }}>Someone</Text>
      </View>
    </View>
  );
};

const Notifications = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        title="Notifications"
        back
        navigation={navigation}
        headerBg={Colors.green}
        iconColor={Colors.white}
      />

      <FlatList
        data={Data}
        keyExtractor={(item, index) => item.id + index.toString}
        renderItem={({ item }) => <ViewItem item={item} />}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
