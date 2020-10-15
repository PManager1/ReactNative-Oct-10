import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View , ListView, TouchableWithoutFeedback } from 'react-native';

import { ScrollView, StyleSheet, Platform, Image, TouchableHighlight } from 'react-native';
import { CardSection, Card } from './common';

import ListItem from './ListItem';

class LibraryList extends Component {

  componentWillMount(){
    console.log('10- on componentWillMount inside LibraryList ');
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library){
    return  <ListItem library={library} />;

  }

  render(){

    // console.log('27 - inside LibraryList this.props = ', this.props);

    return (
            <ListView
              dataSource={this.dataSource}
              renderRow={this.renderRow}
              />
    );
  }
}


const mapStateToProps = state => {
    // console.log('40 - in mapStateToProps in LibraryList state =', state );

    return { libraries : state.libraries };
};

export default connect(mapStateToProps) (LibraryList);





//












//
