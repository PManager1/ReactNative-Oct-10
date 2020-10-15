import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { ScrollView, StyleSheet, Platform, Image, TouchableHighlight } from 'react-native';
import { CardSection } from './common';

import MapView from 'react-native-maps';


import * as actions from '../actions';



class MapItem extends Component {

getInitialState() {
  return {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
}

// onRegionChange(region) {
//   this.setState({ region });
// }

state = {
  mapLoaded: false,
    mapRegion: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
  }
}



render() {
  return (
    <MapView
      region={this.state.region}
      onRegionChange={this.onRegionChange}
    />
  );
}


}

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


// here ownProps are the props coming from ListItem itself. and not the added actions ( I think )
//  what this allows me to do is, pre-calculation on exactly which props i want to pass down to the component ?
//  thus allows me to remove all logic from my component entirely.
// const mapStateToProps = (state, ownProps) => {
//   // expanded can be true or false.
//   // console.log('83- inside the mapStateToProps of ListItem where ownProps = ', ownProps );
//
//   const expanded = state.selectedLibraryId === ownProps.library.id;
//
//     // return { selectedLibraryId : state.selectedLibraryId };
//     return { expanded: expanded };
//
// };

// export default connect(mapStateToProps, actions) (ListItem);

export default MapItem;
