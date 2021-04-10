
import { Login, Register, Home, Cart, Category, Profile } from './../screens'


import * as React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home as HomeIcon, Category as CategoryIcon, Cart as CartIcon, Profile as ProfileIcon, } from './images';
import TabComponents from './Tap'

function AppNavigator() {
  return <NavigationContainer>
    <StatusBar barStyle='default'/>
    <MyTabs />
  </NavigationContainer>;
}

const Tab = createBottomTabNavigator();

function MyTabs() {
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