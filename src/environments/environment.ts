// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,

  BASE_URL: 'http://localhost:8080',

  productUrl: 'http://localhost:8080/api/products',

  fullProductsUrl: 'http://localhost:8080/api/products?size=100',

  categoryUrl: 'http://localhost:8080/api/product-category',

  reporURL: 'http://localhost:8080/report',
  
  request_header : new HttpHeaders(
    {
      "No-Auth": "True"
    }
  ),

  registerUrl: "http://localhost:8080/user/register",

  loginUrl: "http://localhost:8080/authenticate",

  searchUrl: '/search/findByNameContaining?name=',

  findBycategoryId: '/search/findByCategoryId?id=',

};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
