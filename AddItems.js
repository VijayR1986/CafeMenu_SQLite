import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {TextInput} from 'react-native-gesture-handler';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Write down Item & Price to add..."
        style={styles.input}
        onChangeText={(textValue) => setText(textValue)}
      />
      <TouchableOpacity style={styles.button} onPress={() => addItem(text)}>
        <Text style={styles.buttonText}>
          <Icon name="plus" size={20} />
          Add Items..
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    padding: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
