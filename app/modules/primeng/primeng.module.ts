import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {DynamicDialogModule} from 'primeng/dynamicdialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ProgressSpinnerModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    DynamicDialogModule
  ], exports: [
    TableModule,
    ProgressSpinnerModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    DynamicDialogModule
  ]
})
export class PrimengModule { }
