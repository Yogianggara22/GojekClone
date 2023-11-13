import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Beranda, Promo} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.green(),
        tabBarInactiveTintColor: colors.black(0.5),
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 5,
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
          backgroundColor: '#FFFFFF',
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 13,
        },
      }}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name="home"
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Promo"
        component={Promo}
        options={{
          tabBarLabel: 'Promo',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name="ribbon"
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Garden"
        component={Garden}
        options={{
          tabBarLabel: 'Garden',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name="rose"
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      /> */}
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name="person"
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      /> */}
    </Tab.Navigator>
  );
}
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="BlogDetail"
        component={BlogDetail}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      /> */}
    </Stack.Navigator>
  );
};
export default Router;
