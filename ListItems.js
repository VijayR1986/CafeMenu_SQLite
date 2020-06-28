import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import NoOfItemPicker from './NoOfItemPicker';

const ListItems = ({item, itemValue, deleteItems}) => {
  return (
    <View>
      <View style={styles.listItemView}>
        <TouchableOpacity>
          <Text style={styles.listItemText1}>{item.item}</Text>
          <Text style={styles.listItemText2}>{item.price}₹</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <NoOfItemPicker itemValue={itemValue} />
        </TouchableOpacity>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItems(item.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemView: {
    width: '98%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    margin: 5,
  },

  listItemText1: {
    color: 'black',
    fontSize: 15,
    width: 150,
  },
  listItemText2: {
    color: 'red',
    fontSize: 15,
    width: 30,
  },
  listItem: {
    fontSize: 15,
    width: 100,
  },
});

export default ListItems;
