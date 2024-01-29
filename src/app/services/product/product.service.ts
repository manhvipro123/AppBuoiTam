import { Injectable } from '@angular/core';
import {DocumentData, Firestore, collection, deleteDoc, doc, onSnapshot, setDoc, updateDoc } from '@angular/fire/firestore';
import { ProductModel } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prodList: DocumentData[] = [];

  constructor(private firestore: Firestore) {
    onSnapshot(collection(this.firestore, 'products'), (collection) => {
      this.prodList = [];
      collection.forEach((doc) => {
        this.prodList.push(doc.data() as any);
      });
    });
  }

  async add(product:ProductModel) {
    try {
      const docRef = await setDoc(doc(this.firestore, 'products', product.id),product);
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async update(item: DocumentData) {
    await updateDoc(doc(this.firestore, 'products', item['id']), item);
  }

  async delete(item: DocumentData) {
    await deleteDoc(doc(this.firestore, 'products', item['id']));
  }
}
