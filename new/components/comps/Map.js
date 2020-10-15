import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import MapView from 'react-native-maps';

const markerImg = require('../../assets/icons/marker/marker-red-2.png');

const styles = StyleSheet.create({
  map: {
    height: 270,
    borderWidth: 2,
    borderColor: '#3F51B5',
  },
});
// size={size || 'large'}
const Map = props =>
  <MapView
    style={styles.map}
    width={props.width}
    initialRegion={{
      latitude: props.latitude || 51.5216297,
      longitude: props.longitude || -0.0867828,
      latitudeDelta: 0.012,
      longitudeDelta: 0.012,
    }}
    showsPointsOfInterest={false}
  >
    {props.markers.map(marker => (
      <MapView.Marker
        key={marker.title}
        coordinate={marker.latlng}
        title={marker.title}
        image={markerImg}
      />
      ))}
  </MapView>;

Map.propTypes = {
  markers: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    latlng: React.PropTypes.shape({
      latitude: React.PropTypes.number,
      longitude: React.PropTypes.number,
    }),
  })),
  width: React.PropTypes.number,
};

export default Map;
