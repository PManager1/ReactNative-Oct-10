import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3F51B5',
    // backgroundColor: 'red',
    padding: 10,
    marginTop: 5,
    // height: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
});

const ToggleButton = props =>

  <TouchableOpacity
    onPress={props.toggleTechHub}
  >
    <View style={styles.button}>
      <Text style={styles.buttonText}>
        {props.showPins ? 'Hide' : 'Show'} Comps
      </Text>
    </View>
  </TouchableOpacity>;

ToggleButton.propTypes = {
  showPins: React.PropTypes.bool,
  toggleTechHub: React.PropTypes.func,
};

export default ToggleButton;
