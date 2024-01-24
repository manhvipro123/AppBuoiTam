import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc
} from "@angular/fire/firestore";
import {DocumentData} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  prodList :DocumentData[] = [];
  constructor(private firestore:Firestore) {
    // this.getAll().then();
     onSnapshot(collection(this.firestore, "users"), (collection) => {
       this.prodList = [];
       collection.forEach((doc)=>{
        this.prodList.push(doc.data() as any);
      })
    });
  }

  async add() {
    try {
      let id = Math.floor(Math.random() * 1000).toString();
      const docRef = await setDoc(doc(this.firestore, "users",id), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
        id:id
      },);
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async update(item:DocumentData){
     await updateDoc(doc(this.firestore, "users",item["id"]), {
       first: "321312",
       last: "3213",
       born: 3213,
       id: item['id']
    });
  }

  async delete(item:DocumentData){
    await deleteDoc(doc(this.firestore, "users", item['id']));
  }

}
