import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import ContactUs from '../screens/ContactUs';
import ListScreen from '../screens/ListScreen';
import Autocomplete from '../screens/Autocomplete';
import Icon from '../components/TabBarIcon';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <MainStack.Navigator
      initialRouteName="BottomTabNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
      <MainStack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: true, title: 'Nous contacter'}}
      />

      <MainStack.Screen
        name="Autocomplete"
        component={Autocomplete}
        options={{headerShown: true, title: 'Rechercher'}}
      />
    </MainStack.Navigator>
  );
}
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarShowIcon: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Raleway',
        },
        tabBarStyle: {borderTopWidth: 1},
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Accueil',
          tabBarIcon: ({focused}) => {
            return (
              <Icon focused={focused} name="home" size={30} color="#900" />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'Expressions courantes',
          tabBarIcon: ({focused}) => {
            return (
              <Icon focused={focused} name="book" size={30} color="#900" />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={AddScreen}
        options={{
          title: 'Ajout de traduction',
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                focused={focused}
                name="plus-circle"
                size={30}
                color="#900"
              />
            );
          },
        }}
      />

      <BottomTab.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={{
          title: 'A propos',
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                focused={focused}
                name="info-circle"
                size={30}
                color="#900"
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
