import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../../services/firebase/firebase.service";
import {DocumentData} from "@angular/fire/compat/firestore";
import {SharedModule} from "../../shared/modules/shared.module";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
    constructor(public fbService:FirebaseService) {

    }

  ngOnInit(): void {
  }

  update(item:DocumentData){
      this.fbService.update(item).then()
  }

  delete(item:DocumentData){
  this.fbService.delete(item).then()
  }

}
