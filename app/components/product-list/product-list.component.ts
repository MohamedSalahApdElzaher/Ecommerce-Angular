import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/shared/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  sizes: number[] = [2,5,10,20,50];
  selectedSize: number = 5;

  products: Product[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;

  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  previousKeyword: string = "";

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute,
              private userAuthService: UserAuthService,
              private router: Router) { }

  ngOnInit() {
     setTimeout(() => {
      this.route.paramMap.subscribe(() => {
        this.listProducts();
      });
     }, 1000);
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }

  }

  handleSearchProducts() {

      const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

      if (this.previousKeyword != theKeyword) {
        this.thePageNumber = 1;
      }
  
      this.previousKeyword = theKeyword;
  
      console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);
  
      this.productService.findProductsKeywordPaginate(this.thePageNumber - 1,
                                                 this.thePageSize,
                                                 theKeyword).subscribe(this.processResult());                                               
  }

  handleListProducts() {
      const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

      if (hasCategoryId) {
        this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
      }
      else {
        this.currentCategoryId = 1;
      }
  
      if (this.previousCategoryId != this.currentCategoryId) {
        this.thePageNumber = 1;
      }
  
      this.previousCategoryId = this.currentCategoryId;
  
      console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);
  
      this.productService.findProductsCategoryIdPaginate(this.thePageNumber - 1,
                                                 this.thePageSize,
                                                 this.currentCategoryId)
                                                 .subscribe(this.processResult());
  }

  updatePageSize(pageSize: string) {
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  processResult() {
    return (data: any) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  addToCart(theProduct: Product) {
    
    console.log(`Adding to cart: ${theProduct.name}, ${theProduct.unitPrice}`);

   
    let theCartItem = new CartItem(theProduct);

    this.cartService.addToCart(theCartItem);
  }

}
