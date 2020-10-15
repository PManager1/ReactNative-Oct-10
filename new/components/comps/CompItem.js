import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { ScrollView, StyleSheet, Platform, Image, TouchableHighlight } from 'react-native';
import { CardSection } from '../common';

import * as actions from '../../actions';


class CompItem extends Component {

  componentWillUpdate(){
    LayoutAnimation.spring();
  }


  renderDescription(){
    const { comp, expanded } = this.props;
                                                                                                                //  {address[0].street[0]}
                                                                                                                // const { $, zpid, address, taxAssessmentYear, taxAssessment, yearBuilt, lotSizeSqFt, bathrooms, bedrooms, totalRooms, lastSoldDate, lastSoldPrice   } = this.props;
                                                                                                                // if (library.id === selectedLibraryId) {
                                                                                                                // console.log('24- inside renderDescription  comp =', comp);
                                                                                                                // console.log('25- inside renderDescription  comp =', expanded);

    if (expanded) {
        return(
        <Text style={styles.renderDescriptionTextStyle}> {comp.address[0].street[0]} {comp.address[0].city[0]} </Text>

        );
    }
  }

  render(){
    // console.log('31- in CompItem  this.props.selectedLibraryId = ', this.props.selectedLibraryId );  {comp.latitude[0]} {comp.longitude[0]}
    const { titleStyle } = styles;


// const { $, zpid, address, taxAssessmentYear, taxAssessment, yearBuilt, lotSizeSqFt, bathrooms, bedrooms, totalRooms, lastSoldDate, lastSoldPrice, latitude, longitude   } = this.props.comp;
const { address, zpid } = this.props.comp;
// console.log('40- in CompListItem taxAssessmentYear  = ', taxAssessmentYear);
// console.log('41- in CompListItem taxAssessmentYear  = ', taxAssessmentYear[0]);
//  console.log('43- in CompListItem taxAssessment  = ', taxAssessment[0]);
console.log('44- in CompListItem address  = ', address[0]);
console.log('45- in CompListItem  zpid  = ', zpid[0]);
// console.log('46- in CompListItem  latitude  = ',latitude );
// console.log('47- in CompListItem  longitude  = ', longitude );
// {title}

    return (
              <TouchableWithoutFeedback
                onPress={() => this.props.selectComp(zpid[0])}>
                <View>
                  <CardSection>
                    <Text style={titleStyle}>
                      {address[0].street[0]}  {address[0].city[0]} {address[0].state[0]}
                    </Text>
                  </CardSection>
                  {this.renderDescription()}
                </View>
              </TouchableWithoutFeedback>
    );
  }
}



// select_comp
// here ownProps are the props coming from ListItem itself. and not the added actions ( I think )
//  what this allows me to do is, pre-calculation on exactly which props i want to pass down to the component ?
//  thus allows me to remove all logic from my component entirely.
const mapStateToProps = (state, ownProps) => {
  // expanded can be true or false.
  console.log('91- inside the mapStateToProps CompItem.js    ownProps = ', ownProps );
      // this.props.comp;    ownProps.comp.zpid[0]

  //jay console.log('98- inside the mapStateToProps CompItem.js    state.selectedCompId = ', state.selectedCompId );
  //jay  console.log('99- inside the mapStateToProps CompItem.js    ownProps.comp.zpid[0] = ', ownProps.comp.zpid[0] );

  const expanded = state.selectedCompId === ownProps.comp.zpid[0];
    // const expanded = 'false';
  // console.log('85- inside the mapStateToProps CompItem.js    ownProps = ', ownProps );
    // return { selectedLibraryId : state.selectedLibraryId };
    return { expanded: expanded };

};

// export default connect(mapStateToProps, actions) (CompItem);
export default connect(mapStateToProps, actions) (CompItem);


const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  },
  renderDescriptionTextStyle: {
    // backgroundColor:'red',
    marginLeft:5,
    marginRight:5,
    paddingLeft: 10,
    paddingRight: 10
  }
};


//












//
