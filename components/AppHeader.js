import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import React from "react";
import { Badge, Surface, Title } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";

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
              <Feather name="menu" size={IconSize} color={iconColor} />
            </TouchableOpacity>
          )}

          {back && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={IconSize} color={iconColor} />
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
              <Feather name={optionalIcon} size={IconSize} color={iconColor} />
              {optionalBadge && (
                <Badge style={{ position: "absolute", top: -5, right: -10 }}>
                  {optionalBadge}
                </Badge>
              )}
            </TouchableOpacity>
          )}

          {rightFunction && (
            <TouchableOpacity onPress={rightFunction}>
              <Feather name={right} size={IconSize} color={iconColor} />
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
