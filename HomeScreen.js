import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'coral',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('MenuScreen');
          }}>
          <Text
            style={{
              color: 'white',
              borderWidth: 2,
              borderRadius: 6,
              padding: 10,
              backgroundColor: 'green',
              borderColor: 'black',
              fontSize: 20,
            }}>
            Click Here to Open Menus!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
