import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/product';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-selected-row',
  templateUrl: './selected-row.component.html',
  styleUrls: ['./selected-row.component.css']
})
export class SelectedRowComponent implements OnInit {
  id: number;
  clonedProducts: { [s: string]: Product } = {};
  products: any[] = [];

  constructor(private service: ProductService,
    public config: DynamicDialogConfig,
    private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.getProduct();
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

  getProduct() {
    this.service.getProduct(this.config.data.id).subscribe(
      (data) => {
        this.products.push(data);
      }
    )
  }


}
