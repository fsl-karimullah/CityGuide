import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screen/Auth/Login';
import Intro from '../screen/Intro/Intro';
import React from 'react';
import Register from '../screen/Auth/Register';
import HomeSplash from '../screen/HomeSplash/HomeSplash';
import Homepage from '../screen/Homepage/Homepage';
import images from '../utils/image';
import {Image} from 'react-native';
import SavedPlaces from '../screen/Homepage/SavedPlaces';
import Setting from '../screen/Homepage/Setting';
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomMenu() {
    return (
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarActiveTintColor: '#00CEC9'}}>
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{
            title: 'Homepage',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: size, height: size}}
                  source={focused ? images.homeActive : images.homeInactive}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Saved Places"
          component={SavedPlaces}
          options={{
            title: 'Saved Places',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: 20, height: 20}}
                  source={focused ? images.savedActive : images.savedInactive}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            title: 'Setting',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: 20, height: 20}}
                  source={focused ? images.savedActive : images.savedInactive}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Homepage" component={BottomMenu} />
        <Stack.Screen
          name="HomeSplash"
          component={HomeSplash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="intro"
          component={Intro}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
