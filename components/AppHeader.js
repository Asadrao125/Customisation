import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import { Badge, Surface, Title } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../constants/Colors";
import IconsArray from "../assets/Icons/IconsArray";

const createTwoButtonAlert = () =>
  Alert.alert("Drawer", "Under Development", [
    {
      text: "Okay",
      onPress: () => console.log("Okay Pressed"),
      style: "OK",
    },
  ]);

const IconSize = 24;

const AppHeader = ({
  menu,
  back,
  title,
  right,
  rightFunction,
  optionalIcon,
  optionalFunc,
  navigation,
  headerBg,
  iconColor,
  optionalBadge,
  statusBarColor,
}) => {
  return (
    <View>
      <Surface style={[styles.header, { backgroundColor: headerBg }]}>
        <StatusBar backgroundColor={statusBarColor} />
        <View style={[styles.view, { flex: 0.2 }]}>
          {menu && (
            <TouchableOpacity onPress={() => createTwoButtonAlert()}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: iconColor,
                  alignSelf: "center",
                  padding: 5,
                }}
                source={IconsArray.menu}
              />
            </TouchableOpacity>
          )}

          {back && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: iconColor,
                  alignSelf: "center",
                  padding: 5,
                }}
                source={IconsArray.back}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.view}>
          <Title
            style={[
              {
                textAlign: "center",
              },
              { color: iconColor },
            ]}
          >
            {title}
          </Title>
        </View>
        <View style={[styles.view, styles.rightView, { flex: 0.2 }]}>
          {optionalFunc && (
            <TouchableOpacity onPress={optionalFunc} style={styles.rowView}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: iconColor,
                  alignSelf: "center",
                  padding: 5,
                }}
                source={optionalIcon}
              />
              {optionalBadge && (
                <Badge style={{ position: "absolute", top: -5, right: -10 }}>
                  {optionalBadge}
                </Badge>
              )}
            </TouchableOpacity>
          )}

          {rightFunction && (
            <TouchableOpacity onPress={rightFunction}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: iconColor,
                  alignSelf: "center",
                  padding: 5,
                  marginLeft: 10,
                }}
                source={right}
              />
            </TouchableOpacity>
          )}
        </View>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 55,
    elevation: 4,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  view: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },

  titleView: {
    flex: 1,
  },

  rightView: {
    justifyContent: "flex-end",
  },

  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
});

export default AppHeader;
