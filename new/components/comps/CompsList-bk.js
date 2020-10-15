import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View , ListView, TouchableWithoutFeedback } from 'react-native';

import { ScrollView, StyleSheet, Platform, Image, TouchableHighlight } from 'react-native';
import { CardSection, Card } from '../common';

import CompItem from './CompItem';

class CompsList extends Component {

  componentWillMount(){
    console.log('14- on componentWillMount inside CompsList ');
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.comps);
  }

  componentDidMount(){
    // console.log('21- on componentDidMount inside CompsList ');
    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1,r2) => r1 !== r2
    // });
    // this.dataSource = ds.cloneWithRows(this.props.comps);
  }


  renderRow(comp){
    return  <CompItem comp={comp} />;

  }

  render(){
    // console.log('27 - inside CompsList this.props = ', this.props);
    // const { $, zpid, address, taxAssessmentYear, taxAssessment, yearBuilt, lotSizeSqFt, bathrooms, bedrooms, totalRooms, lastSoldDate, lastSoldPrice, latitude, longitude   } = this.props.comps;
    const { zpid, address, latitude, longitude   } = this.props.comps;

    return (
        <View style={styles.styleViewCompsList}>
            <ListView
              dataSource={this.dataSource}
              renderRow={this.renderRow}
              enableEmptySections={true}
              />
          </View>
    );
  }
}


// const mapStateToProps = state => {
const mapStateToProps = (state) => {

// console.log('46 -2 - in CompsList  where state', state );
console.log('47 - CompsList  where state.Comps', state.Comps );


    const eachComp = _.map(state.Comps, (val, uid ) => {
        // console.log('187 -  val=', val);
        // console.log('188 -  uid=', uid);
        return { ...val, uid };  //
    });
    // console.log(' 48-  in CompsList inside the mapStateToProps  - eachComp = ', eachComp );
    // return { libraries : state.Comps };
      return { comps : eachComp };
};

export default connect(mapStateToProps) (CompsList);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  styleViewCompsList:{
    marginTop: 320,
  }
});





//












//
