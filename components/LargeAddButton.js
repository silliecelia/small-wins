import React, {Component} from 'react';
import {
   Modal,
   Text,
   TouchableHighlight,
   StyleSheet,
   View,
   TouchableOpacity
} from 'react-native';

export default class LargeAddButton extends Component {
  render() {
    return (
    	<TouchableOpacity style={styles.LargeAddButton} >
        <Text style={styles.LargeAddButtonText}>Add</Text>
      </TouchableOpacity>
    )
  }    
}

const styles = StyleSheet.create({

  LargeAddButton: {
      backgroundColor: '#CB0019',
      width: 335,
      height: 65,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 412
  },

   LargeAddButtonText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: 48
   }
});