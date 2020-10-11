import * as React from 'react'
import { Icon, Avatar } from 'react-native-elements'
import { Button } from 'react-native-elements';

// import { ListItem } from 'react-native-elements'

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import {
  View, Text,
  FlatList,
  // ListItem,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
]



const MainView = (props) => {
  // console.log('23- inside MainView ListItem=', ListItem.Content);
  console.log('props =', props); 
  const { navigation } = props;
  
  return (<>
  
  <Button
    title="All Inbox "
    type="outline"
    onPress={() => navigation.navigate('TabOneScreen')}

  />

<Button
    title="Red Priority "
    type="outline"
    onPress={() => navigation.navigate('HighPriority')}
  />

<Button
    title="High Priority "
    type="outline"
    onPress={handleHelpPressHigh} 
  />


<Button
    title="Followup "
    type="outline"
  />

<Button
    title="Call Back "
    type="outline"
  />

<Button
    title="Login "
    type="outline"
    onPress={() => navigation.navigate('LoginScreen')}
  />

</>


  )
}

function handleHelpPressAll() {
  console.log('click handleHelpPress'); 

}

function handleHelpPressRed() {
  console.log('click handleHelpPress'); 
}

function handleHelpPressHigh() {
  console.log('click handleHelpPress'); 
}

export default MainView; 
