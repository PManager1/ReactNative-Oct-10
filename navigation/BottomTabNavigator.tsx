import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import MainView from '../screens/MainView';

import HighPriority from '../screens/HighPriority';
import LowPriority from '../screens/LowPriority';
import MidPriority from '../screens/MidPriority';
import DetailView from '../screens/DetailView';

// import CalendarEvent from '../screens/CalendarEvent';


import LoginScreen from '../screens/LoginScreen';

import MultiSelector from '../screens/Components/MultiSelector';

import DateTimePicker from '../screens/DateTimePicker';


import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  // return (
  //   <TabOneStack.Navigator>
  //     <TabOneStack.Screen
  //       name="TabOneScreen"
  //       component={TabOneScreen}
  //       options={{ headerTitle: 'Tab One Title' }}
  //     />
  //   </TabOneStack.Navigator>
  // );

  return (
    <TabOneStack.Navigator> 
      <TabOneStack.Screen name="MainView"
      options={{ headerTitle: 'Main View' }}
      component={MainView} />  
      <TabOneStack.Screen name="TabOneScreen" component={TabOneScreen} />
      <TabOneStack.Screen name="HighPriority" component={HighPriority} />
      <TabOneStack.Screen name="MidPriority" component={MidPriority} />
      <TabOneStack.Screen name="DetailView" component={DetailView} />
      <TabOneStack.Screen name="LoginScreen" component={LoginScreen} />
      <TabOneStack.Screen name="MultiSelector" component={MultiSelector} />
      <TabOneStack.Screen name="DateTimePicker" component={DateTimePicker} />

    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
