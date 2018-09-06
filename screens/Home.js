import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Button } from "react-native-elements";

import AddButton from '../components/AddButton.js';
import AddWinModal from '../components/AddWinModal.js';
import NewWinTest from '../components/NewWinTest.js';


export default class Home extends Component {
	constructor(){
		super()
		this.state = {
			achievementCount: 0,
			addWinModalOpen: false,
			newWin: {
				name: "",
				pointValue: 0
			}
		}
		console.log(this.state);
	}
	increment() {
		this.setState({
			achievementCount: this.state.achievementCount + 1
		});
	}
	showAddWinModal() {
		this.setState({
			addWinModalOpen: true
		}, function(){
			console.log(this.state);
		});
	}
	hideAddWinModal() {
		this.setState({
			addWinModalOpen: false
		});
	}

	updateWinInfo(name, value) {
	  this.setState({
	  	addWinModalOpen: false,
	  	newWin: {
	  		name: name,
	  		pointValue: value
	  	},
	  	achievementCount: this.state.achievementCount + value,
	  }, function(){
	  	console.log(this.state);
	  });

	  // this.increment();
	  // this.hideAddWinModal();
	}

	render() {
		// const {achievementCount} = this.state;
		return (
			<View style={styles.container}>
				<Text style={styles.score}>{`+${this.state.achievementCount} pts`}</Text>
				<Text>{this.state.newWin.name}</Text>
				<Text>{this.state.newWin.pointValue}</Text>
				<View style={styles.addButtonContainer}>
					<AddButton showAddWinModalRef={() => this.showAddWinModal()} />
					<AddWinModal addWinModalOpenRef={this.state.addWinModalOpen}
								 hideAddWinModalRef={() => this.hideAddWinModal()}
								 updateWinInfoRef={(name, value) => this.updateWinInfo(name, value)} />
				</View>
				<NewWinTest newWinButtonTextRef={this.state.newWin.name}
							newWinButtonPointsTextRef={this.state.newWin.pointValue} />
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