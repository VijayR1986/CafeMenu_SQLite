import React, {useState, Component} from 'react';
// import {Picker} from '@react-native-community/picker';
import {StyleSheet, Picker, View, Text} from 'react-native';

class NoOfItemPicker extends Component {
  state = {selectedValue: '0'};
  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.selectedValue}
          onValueChange={(itemValue) => {
            this.setState({selectedValue: itemValue});
          }}>
          <Picker.Item label="Qty." value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
        </Picker>
        {/* <Text style={styles.pickView}>{this.state.choosenLabel}</Text> */}
      </View>
    );
  }
}
export default NoOfItemPicker;

const styles = StyleSheet.create({
  pickView: {
    fontSize: 18,
    alignSelf: 'auto',
    color: 'red',
    width: '40%',
    flexDirection: 'row',
    color: 'black',
    alignItems: 'center',
    borderWidth: 2,
    borderEndWidth: 3,
    borderRadius: 4,
    borderColor: 'black',
  },
});

// code with function
// const NoOfItemPicker = () => {
//   const [selectedValue, setSelectedValue] = useState('');
//   return (
//     <View style={styles.pickView}>
//       <Picker
//         selectedValue={selectedValue}
//         style={{height: 30, width: 40}}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue({itemValue})}>
//         <Picker.Item label="One" value="1" />
//         <Picker.Item label="Two" value="2" />
//         <Picker.Item label="Three" value="3" />
//         <Picker.Item label="4" value="4" />
//         <Picker.Item label="5" value="5" />
//       </Picker>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   pickView: {
//     width: '40%',
//     // paddingTop: 10,
//     // flexDirection: 'row',
//     // justifyContent: 'center',
//     color: 'black',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderEndWidth: 3,
//     borderRadius: 4,
//     borderColor: 'black',
//   },
// });

// export default NoOfItemPicker;
