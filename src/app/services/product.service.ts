import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../shared/product-category';
import { environment } from 'src/environments/environment';
import { BaseAPIService } from './BaseApiService';
import { GetResponseProductCategory, GetResponseProducts } from '../shared/response';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseAPIService {

  constructor(public httpClient: HttpClient) { super(httpClient) }

  // get product
  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${environment.productUrl}/${theProductId}`;
    return this.get<Product>(productUrl);
  }

  // search products with pagination
  findProductsCategoryIdPaginate(thePage: number,
    thePageSize: number,
    category_id: any): Observable<GetResponseProducts> {
    return this.ProductsPaginate(
      environment.findBycategoryId, thePage,
      thePageSize, category_id);
  }

  findProductsKeywordPaginate(thePage: number,
    thePageSize: number,
    theKeyword: any) {
    return this.ProductsPaginate(
      environment.searchUrl, thePage,
      thePageSize, theKeyword);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.get<GetResponseProductCategory>(environment.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

  getProducts(): Observable<Product[]> {
    return this.get<GetResponseProducts>(environment.fullProductsUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getReportFile(): any {
    this.generateReport().subscribe(
      (res: BlobPart) => {
        let file = new Blob([res], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      })
  }

  // generate report
  generateReport(): any {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    };
    return this.httpClient.get<any>(environment.reporURL, httpOptions);
  }



}
