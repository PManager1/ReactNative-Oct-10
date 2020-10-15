import _ from 'lodash';
import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, ActivityIndicator, AppRegistry, Button } from "react-native";
import {StackNavigator} from "react-navigation";
import { List, ListItem, SearchBar } from "react-native-elements";
import { Icon } from 'react-native-elements';
import axios from 'axios';

import { connect } from 'react-redux';
// import { propertiesFetch } from '../../actions';



class CompsList extends Component {


  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    return {
      tabBarLabel: 'Properties',
      tabBarIcon:  ({ tintColor }) => {
              return <Icon name="phone" size={30} color={tintColor} />;
      },
      headerTitle: 'All Properties',
      headerRight: (
        <Button
          title='Add'
          onPress={() => navigation.navigate('createProperty')
           }
        />
      ),
    };
  };




  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 3,
      seed: 3,
      error: null,
      refreshing: false
    };
  }

  componentWillMount() {
    console.log('  59 - AllPropertiesScreen  componentWillMount() ');
  }

  componentDidMount() {
    console.log('  60- AllPropertiesScreen  componentDidMount()  & making the reqeust to fetch properties now ');
  this.makeRemoteRequest();
  }

  goToNextScreen = () => {
        console.log(' clicked goToNExtScreen');
          //  return navigate('Detail');
       }


  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    this.setState({ loading: true });
  // this.props.propertiesFetch();
  };


  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  // NEW  END


  render() {
    // const { navigate } = this.props.navigation;
    // console.log('107 -  this.state.data  = ',  this.state.data);
    // console.log('108 - inside All Properties before RENDER  =>  this.props.properties = ', this.props.properties );
    // console.log('124 - inside All Properties  this.state.data  =>  this.state.data = ', this.state.data );

    return (
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList
              data={this.props.properties}
              renderItem={({ item }) => (
                <ListItem onPress={()=>navigate('editProperty',{item})}
                  roundAvatar
                  title={`${item.agent_name} `}
                  subtitle={`${item.address}, ${item.city}`}
                  containerStyle={{ borderBottomWidth: 0 }}
                />
              )}
              keyExtractor={item => item._id}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
              ListFooterComponent={this.renderFooter}
              onRefresh={this.handleRefresh}
              refreshing={this.state.refreshing}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={50}
            />
          </List>
    );
  }
  }





// const mapStateToProps = state => {
const mapStateToProps = (state) => {

// console.log('46 -2 - in CompsList  where state', state );
// console.log('48 - CompsList  where state.Comps');
// console.log('47 - CompsList  where state.Comps', state.Comps );

    const eachComp = _.map(state.Comps, (val, uid ) => {
        console.log('187 -  val=', val);
        console.log('53 -  uid=', uid);
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
