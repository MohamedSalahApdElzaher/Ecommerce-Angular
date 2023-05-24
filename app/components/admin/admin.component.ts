import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/product';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectedRowComponent } from '../selected-row/selected-row.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: [
    `
:host ::ng-deep .p-cell-editing {
	padding-top: 0 !important;
	padding-bottom: 0 !important;
}
`,
  ],
})
export class AdminComponent {
  products: any[] = [];
  @ViewChild('dt') table: Table;
  clonedProducts: { [s: string]: Product } = {};

  constructor(private primengConfig: PrimeNGConfig,
    private productService: ProductService,
    private userAuthService: UserAuthService
    , public dialogService: DialogService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (err) => console.log(err)
    );
    this.primengConfig.ripple = true;
  }

  onRowEditInit(product: Product, index: any) {
    this.clonedProducts[index] = { ...this.products[index] };
  }

  onRowEditSave(product: Product, index: number) {
    this.userAuthService.notify('success', product.name + ' Saved!');
  }

  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[index];
    delete this.clonedProducts[index];
  }

  handleClick(event: Event) {
    const target = event.target as HTMLButtonElement;
    return target.value;
  }

  ref: DynamicDialogRef;
  show(product_id: number) {
    this.ref = this.dialogService.open(
      SelectedRowComponent,
      {
        data: {
          id: product_id
        },
        header: 'Edit a Product',
        width: '70%',
        contentStyle: { "overflow": "auto" },
        baseZIndex: 10000,
        maximizable: true
      });
  }


}


