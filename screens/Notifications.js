import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import AppHeader from "../components/AppHeader";
import Colors from "../constants/Colors";
import CurveImage from "../components/CurveImage";
import Data from "../constants/Data";
import TextComponent from "../components/TextComponent";
import IconsArray from "../assets/Icons/IconsArray";

const Notifications = ({ navigation }) => {
  navigateToDetails = (item) => {
    navigation.navigate("Details", {
      id: item.id,
      title: item.title,
      url: item.url,
      username: item.username,
    });
  };

  const ViewItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.navigateToDetails(item)}>
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
          <CurveImage url={item.url} width={50} height={50} />
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              marginLeft: 10,
            }}
          >
            <TextComponent textColor={Colors.black} fontSize={15}>
              {item.title}
            </TextComponent>
            <TextComponent textColor={Colors.gray} fontSize={13}>
              {item.username}
            </TextComponent>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <AppHeader
        title="Notifications"
        back
        navigation={navigation}
        headerBg={Colors.green}
        iconColor={Colors.white}
        optionalBadge={Data.length}
        optionalFunc={() => null}
        optionalIcon={IconsArray.bell}
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
