import React, { Component } from 'react';
// import { Text, ListView, TouchableWithoutFeedback, View } from 'react-native';
import { View , ListView, TouchableWithoutFeedback } from 'react-native';
import { ScrollView, StyleSheet, Platform, Image, TouchableHighlight } from 'react-native';

import { CardSection } from './common';
// import { Actions } from 'react-native-router-flux';


import {
  Text,
  Card,
  SocialIcon,
  Divider,
  ButtonGroup,
  Slider,
  Tile,
  Grid,
  Col,
  Row,
  Avatar,
  Icon
} from 'react-native-elements';


class CompItem extends Component {

  onRowPress(){
    // Actions.employeeEdit({ employee: this.props.employee });
  }
  render(){
    const { jobtitle, company, country, formattedLocation, formattedRelativeTime,  date, snippet,  language, source } = this.props.employee;
    // console.log('8- ListItem ', this.props.employee);

    return (
            <Card
              containerStyle={{ marginTop: 15, marginBottom: 15 }}
              title={jobtitle}>
              <Grid containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', padding: 10 }}>
                <Col size={0.25}>
                  <TouchableHighlight onPress={() => console.log("hello")}>
                    <Image source={require('./images/avatar1.jpg')} style={{ height: 50, width: 50, borderRadius: 25, }} />
                  </TouchableHighlight>
                </Col>
                <Col>
                  <Row size={0.75}>
                    <Text style={{ fontSize: 22 }}>{formattedLocation} | BD</Text>
                  </Row>
                  <Row>
                    <Text style={{ color: 'grey' }}>{company} | BA </Text>
                  </Row>
                  <Row>
                    <Text style={{ color: 'grey' }}>{country} | SqFt</Text>
                  </Row>

                  <Row>
                    <Text style={{ color: 'grey' }}>{language} | SqFt</Text>
                  </Row>

                  <Row>
                    <Text style={{ color: 'grey' }}>{source} | SqFt</Text>
                  </Row>


                <Row>
                  <Text style={{ color: 'grey' }}>{date} | SqFt</Text>
                </Row>


                <Row>
                  <Text style={{ color: 'grey' }}>{snippet} | SqFt</Text>
                </Row>

                <Row>
                  <Text style={{ color: 'grey' }}>{formattedRelativeTime} | SqFt</Text>
                </Row>



                </Col>
              </Grid>
            </Card>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  mainView: {
    marginTop: 50
  }
}

export default CompItem;





//












//
