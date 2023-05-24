import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { GetResponseProducts } from "../shared/response";

export class BaseAPIService {
    
    constructor(public http: HttpClient) {
    }

    // GET
    get<T>(url: string): Observable<any>{
        return this.http.get<T>(url);
    }

    // POST
    post<T>(url: string, data: any, {}){
        return this.http.post(url, data, {});
    }

  // get products with pagination
  ProductsPaginate(
    url: string,
    thePage: number,
    thePageSize: number,
    theKeyword: any): Observable<GetResponseProducts> {
    const searchUrl = `${environment.productUrl}${url}${theKeyword}`
      + `&page=${thePage}&size=${thePageSize}`;
    return this.get<GetResponseProducts>(searchUrl);
  }


}


