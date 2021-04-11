
import { Login, Register, Home, Cart, Category, Profile, SlideDetail } from './../screens'


import * as React from 'react';
import { StatusBar, Text, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack'

import { Home as HomeIcon, Category as CategoryIcon, Cart as CartIcon, Profile as ProfileIcon, } from './../components/Icons';
import TabComponents from './Tap'
const token = false
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const CategoryStack = createStackNavigator();
const CartStack = createStackNavigator();
const ProfileStack = createStackNavigator();


const Auth = () => {
  return <AuthStack.Navigator initialRouteName="Home">
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Register" component={Register} />

  </AuthStack.Navigator>
}

function AppNavigator() {
  return <NavigationContainer>
    <StatusBar barStyle='default' />
    {/* <Auth /> */}
    <BottomTap />
  </NavigationContainer>;
}


const HomeRoute = () => {
  return <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Home name="Home" component={Home} headerMod={false} />
    <HomeStack.Home name="SlideDetail" component={SlideDetail} headerMod={false} />
  </HomeStack.Navigator>
}


function BottomTap() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: (props) => <TabComponents icon={HomeIcon} label="Home" {...props} />
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarButton: (props) => <TabComponents icon={CategoryIcon} label="Category" {...props} />
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarButton: (props) => <TabComponents icon={CartIcon} label="Cart" {...props} />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarButton: (props) => <TabComponents icon={ProfileIcon} label="Profile" {...props} />
        }}
      />
    </Tab.Navigator>

  );
}

export default AppNavigator;