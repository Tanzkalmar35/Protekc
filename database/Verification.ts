/*
* This file contains all the funcitons 
* that directly access the database
*/
import { set, ref } from "firebase/database";
import { database } from "./FirebaseConn";

import { v4 as v4UUID } from "uuid";

// Creating a user
export function createUser(name: String) {
  set(ref(database, 'users/' + v4UUID()), {
    username: "Fabian",
  });
  console.log("FUNCTION RAN");

}

