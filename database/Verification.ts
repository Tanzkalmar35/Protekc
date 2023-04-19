/*
* This file contains all the funcitons 
* that directly access the database
*/
import {child, get, getDatabase, ref, set} from "firebase/database";
import {database} from "./FirebaseConn";

const dbRef = ref(getDatabase());

export function createUser(name: String, email: String, password: String): void {
    set(ref(database, 'users/' + email), {
        name: name,
        password: password,
    });
}

export async function userExisting(email: string): Promise<Boolean> {
    return (await getAllUsers()).includes(email);

}

async function getAllUsers(): Promise<string[]> {
    let users: string[] = [];

    await get(child(dbRef, 'users/')).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach(function (data): void {
                data.key !== null ? users.push(data.key) : "";
            });
            return users;
        } else {
            console.log('No users existing');
        }
    });
    return users;
}
