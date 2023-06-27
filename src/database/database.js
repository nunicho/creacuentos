import * as SQLite from "expo-sqlite";

import { Tale } from "../models/tale";

const database = SQLite.openDatabase("tales.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS tales (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          content TEXT NOT NULL
          
          
        )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function insertTale(tale) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO tales (title, content, imageUri ) VALUES (?, ?, ?)`,
        [tale.title, 
        tale.content, 
        tale.imageUri],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchTales() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tales",
        [],
        (_, result) => {
          const tales = [];

          for (const dp of result.rows._array) {
            tales.push(
              new Tale(
                dp.title,
                dp.content,
                dp.imageUri,
                dp.id
              )
            );
          }
          resolve(tales);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchTaleDetails(id) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tales WHERE id = ?",
        [id],
        (_, result) => {
          const dbTale = result.rows._array[0];
          const tale = new Tale(
            dbTale.title,
            dbTale.imageUri,
            dbTale.content,
            dbTale.id
          );
          resolve(tale);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}


/*
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          content TEXT NOT NULL
*/