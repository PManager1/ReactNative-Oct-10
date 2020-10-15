import * as React from 'react'
import  { useState } from "react";
import { Button } from 'react-native-elements';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'


import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import {
  View, Text,
  FlatList,
  // ListItem,
  StyleSheet,
  ActivityIndicator,  CheckBox,
  TouchableOpacity
} from 'react-native'

import { Column as Col, Row } from 'react-native-flexbox-grid';
import { Card, CardSection, Input } from '../components/common';
// import Communications from 'react-native-communications';


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

  const [isSelectedE, setSelectionE] = useState(false);
  const [isSelectedD, setSelectionD] = useState(false);
  const [isSelectedC, setSelectionC] = useState(false);
  const [isSelectedU, setSelectionU] = useState(false);
  
  return (<>
  
<View>

<CardSection>
    <Row size={12}>
      <Col sm={3} md={3} lg={3}>
      <CheckBox
          value={isSelectedE}
          onValueChange={setSelectionE}
          style={styles.checkbox}
        />
<Text style={styles.label}>EMT/NEMT ?</Text>
      </Col>

      <Col sm={3} md={3} lg={3}>
        
      <CheckBox
          value={isSelectedD}
          onValueChange={setSelectionD}
          style={styles.checkbox}
        />
<Text style={styles.label}>Dentist ?</Text>
      </Col>

      <Col sm={3} md={3} lg={3}>

        <CheckBox
          value={isSelectedU}
          onValueChange={setSelectionU}
          style={styles.checkbox}
        />
<Text style={styles.label}> Urgent Care ?</Text>
        </Col>


      <Col sm={3} md={3} lg={3}>

      <CheckBox
          value={isSelectedC}
          onValueChange={setSelectionC}
          style={styles.checkbox}
        />
<Text style={styles.label}> Clinics ?</Text>
      </Col>
    </Row>
  </CardSection>


  








  <Button
    title="All Inbox (make it Flat List"
    type="outline"
    onPress={() => navigation.navigate('TabOneScreen')}
  />  
  <Badge value="99+" status="primary" />
  </View>

<Button
    title="Login "
    type="outline"
    onPress={() => navigation.navigate('LoginScreen')}
  />

<Button
    title="Red Priority "
    type="outline"
    onPress={() => navigation.navigate('HighPriority')}
  />

<Button
    title="Multi Selector "
    type="outline"
    onPress={() => navigation.navigate('MultiSelector')}
  />

<Button
    title="Calendar Event"
    type="outline"
    onPress={() => navigation.navigate('DateTimePicker')}
  />

<Button
    title="High Priority "
    type="outline"
    onPress={() => navigation.navigate('HighPriority')}
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

export default MainView; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxInput: {
    flexDirection: "row",
    marginBottom: 20,
  },
  label: {
    margin: 8,
  },
});
