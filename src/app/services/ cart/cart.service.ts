import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { CartModel } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private firestore: Firestore) {

  }

  async add(cart:CartModel) {
    try {
      let id = Math.floor(Math.random() * 1000).toString();
      const docRef = await setDoc(doc(this.firestore, 'carts', id), cart);
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

}
