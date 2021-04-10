import React from 'react';
import { Platform, StyleSheet, AsyncStorage } from 'react-native';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import FullLoading from '../components/FullLoading';

// Auth
import { Login, Register } from './../screens';

import TabBarIcon from './TabBarIcon';
import Colors from '../constants/Colors';
import ThemedTabBar from './ThemedTabBar';

import { USER_ACCESS_TOKEN } from './../constants/auth'

const Home = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-albums' : 'md-albums'}
        />
      )
    }
  }
);

const Category = createStackNavigator(
  {
    Category: { screen: Category }
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => {
      const navParams = navigation.state.routes[0].params;
      const tabBarVisible = navParams ? navParams.tabBarVisible : true;

      return {
        tabBarVisible,
        tabBarLabel: 'Category',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-pulse' : 'md-pulse'}
          />
        )
      };
    }
  }
);
const Cart = createStackNavigator(
  {
    Cart: { screen: Cart }
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => {
      const navParams = navigation.state.routes[0].params;
      const tabBarVisible = navParams ? navParams.tabBarVisible : true;

      return {
        tabBarVisible,
        tabBarLabel: 'Cart',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-pulse' : 'md-pulse'}
          />
        )
      };
    }
  }
);
const Account = createStackNavigator(
  {
    Account: { screen: Account }
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => {
      const navParams = navigation.state.routes[0].params;
      const tabBarVisible = navParams ? navParams.tabBarVisible : true;

      return {
        tabBarVisible,
        tabBarLabel: 'Account',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-pulse' : 'md-pulse'}
          />
        )
      };
    }
  }
);

const AppTabs = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Category: { screen: Category },
    Cart: { screen: Cart },
    Account: { screen: Account }
  },
  {
    initialRouteName: 'Home',
    order: ['Home', 'Category', 'Cart', 'Account'],
    tabBarComponent: ThemedTabBar
  }
);

const AppRoutes = createStackNavigator(
  {
    AppTabs: { screen: AppTabs },
    Home: { screen: Home }
  },
  {
    initialRouteName: 'AppTabs',
    headerMode: 'none'
  }
);

const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
  },
  {
    headerMode: 'none'
  }
);

class Switch extends React.PureComponent {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  componentDidMount() {
    // LoginManager.logOut();
    // Alert.alert("XXX", JSON.stringify(this.props.client.clearStore, null, 2));
    // this.props.client.resetStore();
    // this.props.navigation.navigate("Auth");
    // this.props.client.clearStore();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const token = await AsyncStorage.getItem(USER_ACCESS_TOKEN);

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(token ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return <FullLoading />;
  }
}

const RootSwitch = createAppContainer(
  createSwitchNavigator(
    {
      Switch: Switch,
      Auth: AuthStack,
      App: AppRoutes
    },
    {
      initialRouteName: 'Switch'
    }
  )
);

export default RootSwitch;

// import React from 'react';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));
