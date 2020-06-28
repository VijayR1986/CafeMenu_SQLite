import React, {useState} from 'react';
import {StyleSheet, FlatList, ScrollView, View, Alert} from 'react-native';
import Header from './Header';
import ListItems from './ListItems';
import AddItem from './AddItems';
import Database from '../Database';
import {ListItem} from 'react-native-elements';

const db = new Database();

export default class MenuScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      // isLoading: true,
      products: [],
      notFound: 'Products not found.\nPlease click (+) button to add it.',
    };
  }

  componentDidMount() {
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      this.getProducts();
    });
  }
  getProducts() {
    let products = [];
    db.listProduct()
      .then((data) => {
        products = data;
        this.setState({
          products,
          // isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState = {
          isLoading: false,
        };
      });
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <ListItem title={item.item} />
    // {/* <View style={styles.listItemView}>
    //   <TouchableOpacity>
    //     <Text style={styles.listItemText1}>{item.item}</Text>
    //     <Text style={styles.listItemText2}>{item.price}₹</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity style={styles.listItem}>
    //     <NoOfItemPicker itemValue={itemValue} />
    //   </TouchableOpacity>
    //   <Icon
    //     name="remove"
    //     size={20}
    //     color="firebrick"
    //     onPress={() => deleteItems(item.id)}
    //   />
    // </View> */}
  );
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Header />
          {/* <AddItem addItem={addItem} /> */}
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.products}
            renderItem={this.renderItem}
            // renderItem={({item}) => (
            //   <ListItems item={item} deleteItems={deleteItems} />
            // )}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    padding: 16,
    fontSize: 18,
    color: 'red',
  },
});

// Use of useState Hook in function
// const [items, setItems] = useState(
//   //   [
//   //   {id: 1, item: 'Cold-Drink', price: '20 '},
//   //   {id: 2, item: 'Masala-Tea', price: '20 '},
//   //   {id: 3, item: 'Bataka-Pauva', price: '30 '},
//   //   {id: 4, item: 'Coffee', price: '20 '},
//   //   {id: 5, item: 'Dabeli', price: '20 '},
//   //   {id: 6, item: 'Vada-pav', price: '20 '},
//   //   {id: 7, item: 'Cheese-Maggi', price: '40 '},
//   //   {id: 8, item: 'Masala-Maggi', price: '30 '},
//   //   {id: 9, item: 'Bataka-vada', price: '20 '},
//   //   {id: 10, item: 'Pav-bhaji', price: '80 '},
//   // ]
//   <Database />,
// );

//   const deleteItems = (id) => {
//     setItems((previousItems) => {
//       return previousItems.filter((item) => item.id != id);
//     });
//   };

//   const addItem = (items) => {
//     if (!items) {
//       Alert.alert('Error', 'Please add an item');
//     } else {
//       setItems((previousItems) => {
//         return [{id: random, item: items}, ...previousItems];
//       });
//     }
//   };

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 0,
//     paddingBottom: 70,
//   },
// });
