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
import {widthPercentageToDP} from 'react-native-responsive-screen';
import DetailPlace from '../screen/Place/DetailPlace';
import {COLOR_PRIMARY} from '../utils/colors';
import Profile from '../screen/Profile/Profile';
import SplashScreen from '../screen/HomeSplash/SplashScreen';
import DetailAll from '../screen/Homepage/DetailAll';
import PopularPlace from '../screen/Homepage/PopularPlace';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomMenu() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#0C9955',
          // tabBarLabel: '.',

          // tabBarLabelStyle: {
          //   fontSize: 50,
          //   position: 'absolute',
          //   bottom: 0,
          // },
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: '#e5e5e5',
            borderTopWidth: 1,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            height: 80,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{
            title: 'Homepage',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: 30, height: 30}}
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
            headerShown: true,
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor: 'white',
              borderBottomColor: '#e5e5e5',
              borderBottomWidth: 1,

              height: 80,
            },
            headerTitleAlign: 'center',
            title: 'Your Saved Places',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: 23, height: 23}}
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
            headerTitle: 'Setting',
            headerShown: true,
            headerShadowVisible: true,
            headerTitleAlign: 'center',
            title: 'Setting',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: size, height: size}}
                  source={
                    focused ? images.settingActive : images.settingInactive
                  }
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
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={(orientation = 'all')}>
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          options={{
            headerTitle: 'Favourites Places',
          }}
          name="detailAll"
          component={DetailAll}
        />
        <Stack.Screen
          options={{
            headerTitle: 'Popular Places',
          }}
          name="PopularPlace"
          component={PopularPlace}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Profile',
          }}
        />

        <Stack.Screen
          name="detailPlace"
          component={DetailPlace}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homepage"
          component={BottomMenu}
          options={{headerShown: false}}
        />
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
