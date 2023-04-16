/*
* This file contains all the funcitons 
* that directly access the database
*/
import { set, ref, get, getDatabase, child } from "firebase/database";
import { database } from "./FirebaseConn";

const dbRef = ref(getDatabase());

export function createUser(email: String, password: String) {
  set(ref(database, 'users/' + email), {
    password: password,
  });
}

export function userExisting(email: string): Boolean {
  return getAllUsers().some((user) => user.includes(email)) ? true : false;
}

export function getAllUsers(): String[] {
  let users: String[] = [];

  get(child(dbRef, 'users/')).then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach(function(data) {
        data.key === null ? "" : users.push(data.key);
      });
    } else {
      console.log('No users existing');
    }
  });

  return users;
}
