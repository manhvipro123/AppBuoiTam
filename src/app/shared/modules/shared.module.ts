import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiLinkModule } from '@taiga-ui/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiCheckboxLabeledModule } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiDataListModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiRadioBlockModule } from '@taiga-ui/kit';
import { TuiStepperModule } from '@taiga-ui/kit';
import { TuiErrorModule } from '@taiga-ui/core';
import { TuiInputPhoneModule } from '@taiga-ui/kit';
import { TuiInputNumberModule } from '@taiga-ui/kit';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiInputTimeModule } from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiFieldErrorPipeModule } from '@taiga-ui/kit';
import { TuiGroupModule } from '@taiga-ui/core';
import { TuiInputSliderModule } from '@taiga-ui/kit';
import { TuiSliderModule } from '@taiga-ui/kit';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { NgOptimizedImage } from '@angular/common';
import { TuiDialogModule } from '@taiga-ui/core';
import { TuiLabelModule } from '@taiga-ui/core';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiPushModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';
import { AsyncPipe } from '@angular/common';

const TaigaModules = [
  TuiIslandModule,
  TuiLinkModule,
  TuiButtonModule,
  TuiCheckboxLabeledModule,
  TuiInputModule,
  TuiDataListWrapperModule,
  TuiDataListModule,
  TuiSelectModule,
  TuiRadioBlockModule,
  TuiStepperModule,
  TuiErrorModule,
  TuiInputPhoneModule,
  TuiInputNumberModule,
  TuiInputDateModule,
  TuiInputPasswordModule,
  TuiInputTimeModule,
  TuiMoneyModule,
  TuiCurrencyPipeModule,
  TuiTextfieldControllerModule,
  TuiFieldErrorPipeModule,
  TuiGroupModule,
  TuiInputSliderModule,
  TuiSliderModule,
  TuiScrollbarModule,
  TuiDialogModule,
  TuiLabelModule,
  TuiTableModule,
  TuiPushModule,
  TuiSvgModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...TaigaModules,
    AsyncPipe,
  ],
  exports: [
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...TaigaModules,
    AsyncPipe,
  ],
})
export class SharedModule {}
