import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class AddButton extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.addButton} onPress={() => this.props.incrementCount()}>
				<Text style={styles.addButtonText}>+</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#CB0019',
        width: 60,
        height: 60,
        borderRadius: 100,
    	alignItems: 'center',
    	justifyContent: 'center',
  },

  	addButtonText: {
  		color: 'white',
  		fontWeight: 'bold',
  		fontSize: 45,
  		lineHeight: 48

  	}

});