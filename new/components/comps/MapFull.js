import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View , ListView, TouchableWithoutFeedback } from 'react-native';
import { ScrollView, StyleSheet, Platform, Image, TouchableHighlight } from 'react-native';
import { CardSection, Card } from '../common';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

import CompItem from './CompItem';
import Map from './Map';
import ToggleButton from './ToggleButton';


class MapFull extends Component {

  constructor() {
    super();
    this.state = {
      showPins: false,
      markers: [],
      latitude: 37.388987,
      longitude: -122.014262,
      // latitude: 55.5216297,
      // longitude: -0.0867828,
    };
  }

  toggleTechHub() {
    // console.log('30-  toggleTechHub clicked  &  this.props.CompsSimpleArr =', this.props.CompsSimpleArr);
    // console.log('31-  toggleTechHub clicked  &  this.props.CompsSimpleArr =', this.props.CompsSimpleArr);

    const markers = this.props.MarkerArr;

    if (this.state.markers.length > 0) {
      return this.setState({
        showPins: !this.state.showPins,
        markers: [],
      });
    }
    return this.setState({
      showPins: !this.state.showPins,
      markers,
    });
  }



  render(){
    // this.prpos contains the object comps which contains the whole Blob of objects coming from backend, that has object -> comps
    // console.log('50 - inside MapFull this.props = ', this.props);
    // console.log('52 - inside MapFull this.props = ', this.props.MarkerArr);

    return (
      <View style={styles.container}>
        <Map
        longitude={this.state.longitude}
        latitude={this.state.latitude}
        width={width - 2}
        style={styles.map}
        markers={this.state.markers}
      />

      <ToggleButton
        style={styles.ToggleButton}
        toggleTechHub={() => this.toggleTechHub()}
        showPins={this.state.showPins}
      />
    </View>

    );
  }
}


const mapStateToProps = state => {

// console.log('79-  MapFull mapStateToProps --- CompsReducerSimple values state = ', state.CompsSimple );
    const eachComp = _.map(state.Comps, (val, uid ) => {
        // console.log('98 -  val inside MapFull=', val);
        // console.log('99 -  uid  inside MapFull=', uid);
        return { ...val, uid };
    });

// JAY ---  provide the lat long from state.Comps in mapStateToProps


const initialMapRegion_Lat = null;
const initialMapRegion_Long = null;

//  address[0].latitude
// console.log('92 - MapFull.js THE value of state.Comps    state.Comps[0].address  = ', state.Comps[0]);
// console.log('93 - MapFull.js state.Comps[0].address[0].latitude ].address[0].latitude[0]  = ', state.Comps[0].address[0].latitude[0]);


//Jay - this value should be having all the long lats.
    const CompsSimpleArr = state.CompsSimple;
//Jay 2 - this value should be having all the long lats.
    const Comps_Long_Lat_Arr = [];
// LOOP  TO GET LATLONG
    const Comp_Marker_Arr = _.map(state.Comps, (val, uid ) => {
      // console.log('98 -  val inside MapFull=', val);
      // console.log('99 -  val inside MapFull & val[0] =', val.address[0].latitude);
      // console.log('100 -  uid  inside MapFull=', uid);
      //  provide the lat long from state.Comps in mapStateToProps
      var lat = val.address[0].latitude[0];
      var long = val.address[0].longitude[0];
      var title = val.address[0].street[0];

      var city = val.address[0].city[0];

        // console.log('109 -  lat inside MapFull=', lat);
        // console.log('110 -  long inside MapFull=', long);
        // console.log('111 -  title inside MapFull=', title);
        // console.log('112 -  city inside MapFull=', city);

        // return { ...val, uid };

        var backComps = {};
            backComps.title= title;
            backComps.latlng = {};
            backComps.latlng.latitude = lat;
            backComps.latlng.longitude = long;

          Comps_Long_Lat_Arr.push(backComps);
          // console.log('106- Comps_Long_Lat_Arr =  ', Comps_Long_Lat_Arr );

    });

// END LOOP  TO GET LATLONG


    // ORIGINAL CODE
      const CompArr  = _.map(eachComp, (val, uid ) => {
          // console.log('98 -  val inside MapFull=', val);
          // console.log('99 -  uid  inside MapFull=', uid);
          return { ...val, uid };
      });


    return { comps : eachComp, CompsSimpleArr: CompsSimpleArr, MarkerArr : Comps_Long_Lat_Arr };
};

export default connect(mapStateToProps) (MapFull);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ToggleButton: {
      // marginTop:1,
      marginBottom: 15,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});



//












//
