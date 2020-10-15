    // class MultiSelector 

    // import { connect } from 'react-redux';
import React, {
  Component
} from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  Text
} from 'react-native';

import CustomMultiPicker from "react-native-multiple-select-list";

import Icon from 'react-native-vector-icons/Ionicons';


export default class MultiSelector extends Component {


  constructor(props){
    super(props);
    this.state = {
      pageWidth: Dimensions.get('window').width,
      pageHeight: Dimensions.get('window').height,
      searchText: null,
      selected: [1,2]
    };
  }


  componentDidMount = () => {
    // const selected = this.props.selected
    // if(typeof selected === "object"){
    //   console.log('13-  selected  = ' , selected);
    //   selected.map(select => {
    //     this._onSelect(select)
    //   })
    // } else {
    //   this._onSelect(selected)
    // }
  }

  static navigationOptions = ({ navigation }) => ({
      // title: `${navigation.state.params.user}`,
  });

    render() {
      const userList = {
        "123":"Red_Priority_P",
        "124":"Homework_Needed_P",
        "p1":"RedPriority",
        "p2":"Distressed_RequireWork_P",
        "p3":"Research_Needed_P",
        "p4":"Continue_P",
        "p5":"Send_Contract_P",
        "p6":"Later_P",
        "p7":"No_Updated_P",
        "p8":"Later_Today_P",
        "p9":"Left_VM_P",
        "p10":"Motivated_Seller_P",
        "p11":"Bi_Weekly_P",
        "p12":"Polite_P",
        "p13":"Awesome_Person_P",
        "p14":"Negotiation_Willing_P",
        "p15":"Counter_P",
        "p16":"Wrong_NO_P"
}
    const matchlist = [
          "Red_Priority_P",
          "Homework_Needed_P",
          "RedPriority",
          "Distressed_RequireWork_P",
          "Research_Needed_P",
          "Continue_P",
          "Send_Contract_P",
          "Later_P",
          "No_Updated_P",
          "Later_Today_P",
          "Left_VM_P",
          "Motivated_Seller_P",
          "Bi_Weekly_P",
          "Polite_P",
          "Awesome_Person_P",
          "Negotiation_Willing_P",
          "Counter_P",
          "Wrong_NO_P"
          ];


      console.log('23- MultiSelector  =', this.props );
      return (
        <ScrollView>

        <CustomMultiPicker
            options={userList}
            search={true} // should show search bar?
            multiple={true} //
            placeholder={"Search"}
            placeholderTextColor={'#757575'}
            returnValue={"label"} // label or value
            callback={(res)=>{ console.log(res) }} // callback, array of selected items
            rowBackgroundColor={"#eee"}
            rowHeight={40}
            rowRadius={5}
            searchIconName="ios-checkmark"
            searchIconColor="red"
            searchIconSize={30}
            iconColor={"#00a2dd"}
            iconSize={30}
            selectedIconName={"ios-checkmark-circle-outline"}
            unselectedIconName={"ios-radio-button-off-outline"}
            scrollViewHeight={130}
            selected={["Tom", "Christin"]} // list of options which are selected by default
          />
    </ScrollView>
      );
    }
}


// const styles = {
//   cardSectionStyle: {
//     justifyContent: 'center'
//   },
//   textStyle: {
//     flex: 1,
//     fontSize: 18,
//     textAlign: 'center',
//     lineHeight: 40
//   },
//   containerStyle: {
//     backgroundColor: 'rgba(0, 0, 0, 0.75)',
//     position: 'relative',
//     flex: 1,
//     justifyContent: 'center'
//   }
// };







// export default ChatScreen;












//

    
    