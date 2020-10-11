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
  />

<Button
    title="Red Priority "
    type="outline"
  />

<Button
    title="High Priority "
    type="outline"
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

export default TabOneScreen; 

// {
//   list.map((item, i) => (
//     <ListItem key={i} bottomDivider>
//       <Icon name={item.icon} />
//       <ListItem.Content>
//         <ListItem.Title>{item.title}</ListItem.Title>
//       </ListItem.Content>
//       <ListItem.Chevron />
//     </ListItem>
//   ))
// }