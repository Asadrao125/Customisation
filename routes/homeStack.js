import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Settings from "../screens/Settings";
import Notifications from "../screens/Notifications";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
      headerLeft: null,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Profile",
      headerLeft: null,
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: "Settings",
      headerLeft: null,
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: "Notifications",
      headerLeft: null,
    },
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
