import React, {Component} from 'react';
import {
   Text,
   TouchableHighlight,
   StyleSheet,
   View,
   TouchableOpacity
} from 'react-native';

export default class NewWin extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.NewWinButton} >
          <Text style={styles.NewWinButtonText}>{this.props.newWinButtonTextRef}</Text>
          <Text style={styles.NewWinButtonPointsText}>{this.props.newWinButtonPointsTextRef}</Text>
        </TouchableOpacity>
    )
  }    
}

const styles = StyleSheet.create({
  
  NewWinButton: {
      backgroundColor: '#EBEBEB',
      width: 335,
      height: 65,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 412
  },

   NewWinButtonText: {
      color: '#9B9B9B',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 48,
      textDecorationLine: 'line-through'
   },

   NewWinButtonPointsText: {
      color: '#9B9B9B',
      fontWeight: 'normal',
      fontSize: 16,
   }
});