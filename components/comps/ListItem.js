import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { ScrollView, StyleSheet, Platform, Image, TouchableHighlight } from 'react-native';
import { CardSection } from './common';

// to import / access to all the actions in the actions file
import * as actions from '../actions';



class ListItem extends Component {

  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  renderDescription(){
    // const { library, selectedLibraryId } = this.props;
    const { library, expanded } = this.props;
    // if (library.id === selectedLibraryId) {
    if (expanded) {
        return(
        <Text style={styles.renderDescriptionTextStyle}>  {library.description}  </Text>
        // renderDescriptionTextStyle
        );
    }
  }

  render(){
      // console.log('14- in ListItem  this.props.selectedLibraryId = ', this.props.selectedLibraryId );
    const { titleStyle } = styles;
    const {id, title, selectedLibraryId } = this.props.library;

    //
    // if (selectedLibraryId  == id  ) {
    //     console.log(' 25- List Item  They are equal ');
    // }

    // figure out if this is the currently selected item, we do that by comparing the
    // this.props.selectedId with all the items, whatever is selected, If they're equal that means
    // its equal to this currently selected id.
    return (
              <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}>
                <View>
                  <CardSection>
                    <Text style={titleStyle}>
                      {title}
                    </Text>
                  </CardSection>
                  {this.renderDescription()}
                </View>
              </TouchableWithoutFeedback>
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
const mapStateToProps = (state, ownProps) => {
  // expanded can be true or false.
  // console.log('83- inside the mapStateToProps of ListItem where ownProps = ', ownProps );

  const expanded = state.selectedLibraryId === ownProps.library.id;

    // return { selectedLibraryId : state.selectedLibraryId };
    return { expanded: expanded };

};

export default connect(mapStateToProps, actions) (ListItem);
// export default ListItem;





//












//
