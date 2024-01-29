import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { DocumentData } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss',
})
export class ManagementComponent implements OnInit {
  productList: DocumentData[] = [];

  ngOnInit(): void {}

  constructor(public productService: ProductService) {}

  readonly columns = [
    'Name',
    'Price',
    'Description',
    'Image',
    'Quantity',
    'Status',
    'CategoryId',
  ];

  updateForm: FormGroup = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    quantity: new FormControl(0),
    price: new FormControl(0),
    status: new FormControl(false),
    categoryId: new FormControl(''),
  });

  openUpdateDialog = false;

  showUpdateDialog(item: DocumentData) {
    this.openUpdateDialog = true;
    this.updateForm.setValue(item);
  }

  update() {
    let item = {
      id: this.updateForm.controls['id'].value,
      ...this.updateForm.value,
    };
    console.log(item);
    this.productService.update(item);
    this.updateForm.reset();
    this.openUpdateDialog = false;
  }

  openCreateDialog = false;
  showCreateDialog() {
    this.createForm.reset();
    this.openCreateDialog = true;
  }

  createForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    quantity: new FormControl(0, Validators.required),
    price: new FormControl(0, Validators.required),
    status: new FormControl(false, Validators.required),
    categoryId: new FormControl('', Validators.required),
  });

  create() {
    let newProd = {
      id: Date.now().toString(),
      ...this.createForm.value,
    };
    this.productService.add(newProd);
    this.openCreateDialog = false;
  }

  delete(item: DocumentData) {
    this.productService.delete(item).then();
  }
}
