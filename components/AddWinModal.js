import React, {Component} from 'react';
import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   StyleSheet,
   TextInput,
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


import LargeAddButton from '../components/LargeAddButton.js';

var radio_props = [
  {label: '1 point', value: 1 },
  {label: '10 points', value: 10 }
];


export default class AddWinModal extends Component {
  constructor(props) {
    super(); 

    // this.state = {
    //   name: "Enter your win",
    //   pointValue: 1
    // }
  }

  // updateName(name) {
  //   this.setState({name: name}, function(){
  //     console.log(this.state);
  //   })
  // }

  // updatePointValue(value) {
  //   this.setState({pointValue: value});
  // }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.addWinModalOpenRef}
          onRequestClose={() => {}}>
          <View style={{marginTop: 50}}>
            <View>
              <TouchableHighlight onPress={() => this.props.hideAddWinModalRef()}>
                <Text>HIDE ME</Text>
              </TouchableHighlight>
            </View>
          </View>

         <Text style={styles.headerText}>Add a New Win</Text>

         <Text style={styles.titleText}>My win*</Text>
         
         <TextInput style={styles.textField}
                    onChangeText={(name) => this.updateName(name)}
                    value={this.state.name} />  

          <View style={styles.pointsContainer}>
            <Text style={styles.titleText}>Points</Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={(value) => this.updatePointValue(value)}
            /> 
          </View>    

         <View style={styles.LargeAddButtonContainer}>
          <LargeAddButton/>
         </View>
        </Modal>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      height: '100%'
  },
  pointsContainer: {
    position: 'relative',
    zIndex: 10,
  },

  LargeAddButtonContainer: {
      position: 'absolute',
      bottom: 50,
      alignItems: 'center',
      width: '100%',
  },

   headerText: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold'
   },

   titleText: {
      fontSize: 18,
      marginLeft: 20,
      marginTop: 20
   },

   textField: {
      borderRadius: 5,
      width: 335,
      height: 120,
      backgroundColor: '#DFA1EC',
      borderStyle: 'solid',
      borderColor: '#d6d7da',
      marginLeft: 20,
      marginTop: 10,
      flexWrap: "wrap"
  },

  textFieldText: {
      fontSize: 18,
      paddingLeft: 50,
  },

   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

  // radio buttons

  // point tiers