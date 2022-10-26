import { View, FlatList, StyleSheet, Text } from "react-native";
import AppHeader from "../components/AppHeader";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../constants/Colors";
import ImageComponent from "../components/ImageComponent";

const data = [
  {
    id: "1",
    title: "Someone has accepted your request",
    url: "https://via.placeholder.com/600/92c952",
  },
  {
    id: "2",
    title: "Someone has accepted your request",
    url: "https://via.placeholder.com/600/771796",
  },
  {
    id: "3",
    title: "Someone has accepted your request",
    url: "https://via.placeholder.com/600/24f355",
  },
  {
    id: "4",
    title: "Someone has accepted your request",
    url: "https://via.placeholder.com/600/d32776",
  },
  {
    id: "5",
    title: "Someone has accepted your request",
    url: "https://via.placeholder.com/600/f66b97",
  },
  {
    id: "6",
    title: "Someone has accepted your request",
    url: "https://via.placeholder.com/600/56a8c2",
  },
  {
    id: "7",
    title: "Someone has accepted your request",
    url: "https://via.placeholder.com/600/b0f7cc",
  },
  {
    id: "8",
    title: "Someone has accepted your request",
    url: "https://via.placeholder.com/600/54176f",
  },
  {
    id: "9",
    title: "Someone has accepted your request",
    url: "https://via.placeholder.com/600/51aa97",
  },
  {
    id: "10",
    title: "Someone has accepted your request",
    url: "https://via.placeholder.com/600/810b14",
  },
];

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
      <ImageComponent url={item.url} width={40} height={40} />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginLeft: 10,
        }}
      >
        <Text style={{ color: Colors.titleColor }}>{item.title}</Text>
        <Text style={{ color: Colors.gray }}>Someone</Text>
        <View
          style={{ flex: 1, backgroundColor: Colors.lightGray, height: 1 }}
        />
      </View>
    </View>
  );
};

const Notifications = ({ navigation }) => {
  return (
    <View>
      <AppHeader
        title="Notifications"
        back
        navigation={navigation}
        headerBg={Colors.green}
        iconColor={Colors.white}
      />

      <FlatList
        data={data}
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
