import { View } from "react-native";
import { React } from "react";
import AppHeader from "../components/AppHeader";
import Colors from "../constants/Colors";
import SimpleImage from "../components/SimpleImage";
import CurveImage from "../components/CurveImage";
import TextComponent from "../components/TextComponent";

const Details = ({ route, navigation }) => {
  const { id, title, url, username } = route.params;

  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <AppHeader
        statusBarColor={Colors.darkGreen}
        title="Details"
        back
        navigation={navigation}
        headerBg={Colors.green}
        iconColor={Colors.white}
      />
      <View style={{ position: "relative" }}>
        <SimpleImage width="100%" height={200} url={url} opacity={0.4} />
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CurveImage url={url} width={100} height={100} />
        </View>
      </View>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <View style={{ justifyContent: "center", marginLeft: 10 }}>
          <TextComponent textColor={Colors.black} fontSize={15}>
            {title}
          </TextComponent>
          <View style={{ flexDirection: "row" }}>
            <TextComponent textColor={Colors.gray} fontSize={13}>
              {username} - ID: {id}
            </TextComponent>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;
