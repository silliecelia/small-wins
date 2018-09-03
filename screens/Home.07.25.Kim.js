import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import AddButton from '../components/AddButton.js';
import { Button } from "react-native-elements";
import AddWinModal from '../components/AddWinModal.js';


export default class Home extends Component {
	constructor(){
		super()
		this.state = {
			achievementCount: 0,
			incrementCount: function() {

			}
		}
	}
	increment() {
		// const {achievementCount} = this.state;
		this.setState({achievementCount: this.state.achievementCount + 1});
		console.log(this.state)
	}
	render() {
		// const {achievementCount} = this.state;
		return (
			<View style={styles.container}>
				<Text style={styles.score}>{`+${this.state.achievementCount} pts`}</Text>
				<View style={styles.addButtonContainer}>
					<AddButton incrementCount={() => this.increment()} />
					<AddWinModal />
				</View>
			</View>

		)
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%'
  },
  addButtonContainer: {
  	position: 'absolute',
  	bottom: 50,
  	alignItems: 'center',
  	width: '100%',
  },
  score: {
  	position: 'absolute',
  	textAlign: 'center',
  	width: '100%',
  	fontSize: 80,
  	color: '#4A4A4A',
  	top: 200,
  }

});