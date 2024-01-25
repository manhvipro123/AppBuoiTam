import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { DocumentData } from '@angular/fire/compat/firestore';
import { SharedModule } from '../../shared/modules/shared.module';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  updateForm: FormGroup = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    first: new FormControl(''),
    last: new FormControl(''),
    born: new FormControl(''),
  });

  openUpdateDialog = false;

  showUpdateDialog(item: DocumentData) {
    this.openUpdateDialog = true;
    this.updateForm.setValue(item);
  }

  constructor(public fbService: FirebaseService) {}

  ngOnInit(): void {}

  update() {
    let item = {
      id: this.updateForm.controls['id'].value,
      ...this.updateForm.value,
    };
    console.log(item);
    this.fbService.update(item);
    this.updateForm.reset();
    this.openUpdateDialog = false;
  }

  delete(item: DocumentData) {
    this.fbService.delete(item).then();
  }
}
