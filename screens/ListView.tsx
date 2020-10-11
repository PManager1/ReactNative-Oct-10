import * as React from 'react'
import { ListItem, Icon, Avatar } from 'react-native-elements'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';


import {
  FlatList,
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




const TabOneScreen = () => {
  // console.log('23- inside TabOneScreen ListItem=', ListItem.Content);

  
  return (<>
  
  <Button
    title="All Inbox "
    type="outline"
    onPress={handleHelpPressAll} 
  />

<Button
    title="Red Priority "
    type="outline"
    onPress={handleHelpPressRed} 
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

export default TabOneScreen; 
