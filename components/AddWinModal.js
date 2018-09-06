import React, {Component} from 'react';
import {
   Modal,
   Text,
   TouchableHighlight,
   TouchableOpacity,
   View,
   StyleSheet,
   TextInput,
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
  {label: '20 points', value: 20 },
  {label: '10 points', value: 10 },
  {label: '5 points', value: 5 }
];
var radio_props_first_index = 0;


export default class AddWinModal extends Component {
  constructor(props) {
    super(); 

    this.state = {
      name: "",
      pointValue: radio_props[radio_props_first_index].value
    }
  }

  updateName(name) {
    this.setState({
      name: name
    }, function(){
      console.log(this.state);
    });
  }

  updatePointValue(value) {
    this.setState({
      pointValue: value
    }, function(){
      console.log(this.state);
    });
  }

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
                    placeholder="Enter your win"
                    onChangeText={(name) => this.updateName(name)} />  
{/*
- why write the CSS under RadioForm?
- did you mean updateWinPointValue? seems to work for 20 points only though
- am i not suppoed to write comments between code?
*/}         
          <View style={styles.pointsContainer}>
            <Text style={styles.titleText}>Points</Text>
            <RadioForm
              radio_props={radio_props}
              initial={radio_props_first_index}
              onPress={(value) => this.updatePointValue(value)}
              buttonColor={'#CB0019'}
            />
          </View>    

         <View style={styles.LargeAddButtonContainer}>
            <TouchableOpacity style={styles.LargeAddButton} onPress={() => this.props.updateWinInfoRef(this.state.name, this.state.pointValue)} >
               <Text style={styles.LargeAddButtonText}>Add</Text>
             </TouchableOpacity>
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