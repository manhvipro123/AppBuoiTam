import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent,
    TuiIslandModule,
    TuiLinkModule,
    TuiButtonModule

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent,
    TuiIslandModule,
    TuiLinkModule,
    TuiButtonModule

  ]
})
export class SharedModule { }
