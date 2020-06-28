// import React, {Component} from 'react';
// import SQLite from 'react-native-sqlite-storage';

// let db;

// export default class Database extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {items: []};
//     db = SQLite.openDatabase(
//       {
//         name: 'sqlite.db',
//         createFromLocation: 1,
//       },
//       this.successToOpenDB.bind(this),
//       this.failToOpenDB.bind(this),
//     );
//   }
//   successToOpenDB() {
//     db.transaction((tx) => {
//       tx.executeSql('SELECT * FROM MENU', [], (tx, results) => {
//         let dataLength = results.rows.length;
//         alert(dataLength);
//         if (dataLength > 0) {
//           let helperArray = [];
//           for (let i = 0; i < results.rows.length; i++) {
//             helperArray.push(results.rows.item(i));
//             this.setState({items: helperArray});
//           }
//         }
//       });
//     });
//   }

//   failToOpenDB(err) {
//     console.log(err);
//   }
// }

import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = 'sqlite.db';
const database_version = '1.0';
const database_displayname = 'SQLite_React_Offline_Database';
const database_size = 200000;

export default class Database {
  initDB() {
    let db;
    return new Promise((resolve) => {
      console.log('Plugin integrity check ...');

      SQLite.echoTest()
        .then(() => {
          console.log('Integrity check passed ...');
          console.log('Opening database ...');
          SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
          )
            .then((DB) => {
              db = DB;
              console.log('Database OPEN');
              db.executeSql('SELECT * FROM Menu')
                .then(() => {
                  console.log('Database is ready ... executing query ...');
                })
                .catch((error) => {
                  console.log('Received error: ', error);
                  console.log('Database not yet ready ... populating data');
                  db.transaction((tx) => {
                    tx.executeSql(
                      'CREATE TABLE IF NOT EXISTS Menu (id, item, price, quntity)',
                    );
                  })
                    .then(() => {
                      console.log('Table created successfully');
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                });
              resolve(db);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log('echoTest failed - plugin not functional');
        });
    });
  }

  closeDatabase(db) {
    if (db) {
      console.log('Closing DB');
      db.close()
        .then((status) => {
          console.log('Database CLOSED');
        })
        .catch((error) => {
          this.errorCB(error);
        });
    } else {
      console.log('Database was not OPENED');
    }
  }

  listProduct() {
    return new Promise((resolve) => {
      const products = [];
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql('SELECT m.id, m.item, m.price FROM Menu m', []).then(
              ([tx, results]) => {
                console.log('Query completed');
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  console.log(`item ID: ${row.id}, item Name: ${row.item}`);
                  const {id, item, price} = row;
                  products.push({
                    id,
                    item,
                    price,
                  });
                }
                console.log(products);
                resolve(products);
              },
            );
          })
            .then((result) => {
              this.closeDatabase(db);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
  productById(id) {
    console.log(id);
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Menu WHERE prodId = ?', [id]).then(
              ([tx, results]) => {
                console.log(results);
                if (results.rows.length > 0) {
                  let row = results.rows.item(0);
                  resolve(row);
                }
              },
            );
          })
            .then((result) => {
              this.closeDatabase(db);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  addProduct(prod) {
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql('INSERT INTO Menu VALUES (?, ?, ?)', [
              prod.id,
              prod.item,
              prod.price,
              prod.quntity,
            ]).then(([tx, results]) => {
              resolve(results);
            });
          })
            .then((result) => {
              this.closeDatabase(db);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  updateProduct(id, prod) {
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql(
              'UPDATE Menu SET item = ?, price = ?, quntity = ? WHERE id = ?',
              [prod.item, prod.price, prod.quntity, id],
            ).then(([tx, results]) => {
              resolve(results);
            });
          })
            .then((result) => {
              this.closeDatabase(db);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  deleteProduct(id) {
    return new Promise((resolve) => {
      this.initDB()
        .then((db) => {
          db.transaction((tx) => {
            tx.executeSql('DELETE FROM Menu WHERE id = ?', [id]).then(
              ([tx, results]) => {
                console.log(results);
                resolve(results);
              },
            );
          })
            .then((result) => {
              this.closeDatabase(db);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}
