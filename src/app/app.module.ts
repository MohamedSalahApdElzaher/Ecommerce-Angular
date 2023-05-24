import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MembersPageComponent } from './components/members-page/members-page.component';
import { ReportPageComponent } from './components/report-page/report-page.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ForbidenComponent } from './components/forbiden/forbiden.component';
import { SignupComponent } from './components/signup/signup.component';
import { GuardGuard } from './components/_auth/guard.guard';
import { AuthInterceptor } from './components/_auth/auth.interceptor';
import { UserService } from './services/user.service';
import { PrimengModule } from './modules/primeng/primeng.module';
import { RoutesModule } from './modules/routes/routes.module';
import { NotificationModule } from './modules/notification/notification.module';
import { DialogService } from 'primeng/dynamicdialog';
import { SelectedRowComponent } from './components/selected-row/selected-row.component';
import { TranslationModule } from './modules/translation/translation.module';
import { TranslateService } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    LoginStatusComponent,
    MembersPageComponent,
    ReportPageComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbidenComponent,
    SignupComponent,
    SelectedRowComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    PrimengModule,
    RoutesModule,
    NotificationModule,
    TranslationModule
  
  ],
  exports: [],
  providers: [ProductService, DialogService, TranslateService,
    GuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
