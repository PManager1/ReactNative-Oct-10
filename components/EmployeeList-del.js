

import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {

    componentWillMount() {
      this.props.employeesFetch();
      this.createDataSource(this.props);
    }
    //

    componentWillReceiveProps(nextProps) {
      // nextProps are the next set of props that this component
      // will be rendered with -> this.props is still the old set of props
      this.createDataSource(nextProps);
    }

    //
    createDataSource({ employees }) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(employees);
    }



    renderRow(employee){
      return <ListItem employee={employee} />;

    }

      render(){
        console.log('41-EmployeeList  this.props', this.props );
        return(
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />

        );
}

}  //end the class


// const mapStateToProps = state => {
//   // convert from object to an array
//   console.log('56 - state ', state);
//   const employees = state.employees;
//
//   console.log('59 E MapStateToProps state.employees =', employees);
//   // const emp = employees.employees;  // it should have an array of
//   // { status, folio, address,city, zipcode, , dom etc. }
//   return { employees };
// };

const mapStateToProps = state => {

  const employees = _.map(state.employees, (val, uid ) => {
      return { ...val, uid };  //   { shift: 'Monday'}
  });

  return { employees };
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);















//
