
import { Login, Register, Home, Cart, Category, Profile } from './../screens'


import * as React from 'react';
import { StatusBar, Text, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack'

import { Home as HomeIcon, Category as CategoryIcon, Cart as CartIcon, Profile as ProfileIcon, } from './Icons';
import TabComponents from './Tap'

function AppNavigator() {
  return <NavigationContainer>
    <StatusBar barStyle='default' />
    <StackNativation />
    {/* <BottomTap /> */}
  </NavigationContainer>;
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNativation() {
  return <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
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