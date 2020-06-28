import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Make a function to call header
const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Cafe - Jalsa : Menu!',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Header;
