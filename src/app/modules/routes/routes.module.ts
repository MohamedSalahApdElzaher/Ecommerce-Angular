import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MembersPageComponent } from 'src/app/components/members-page/members-page.component';
import { ReportPageComponent } from 'src/app/components/report-page/report-page.component';
import { CartDetailsComponent } from 'src/app/components/cart-details/cart-details.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AdminComponent } from 'src/app/components//admin/admin.component';
import { UserComponent } from 'src/app/components//user/user.component';
import { LoginComponent } from 'src/app/components//login/login.component';
import { ForbidenComponent } from 'src/app/components//forbiden/forbiden.component';
import { SignupComponent } from 'src/app/components//signup/signup.component';
import { GuardGuard } from 'src/app/components//_auth/guard.guard';
import { ProductDetailsComponent } from 'src/app/components/product-details/product-details.component';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';


const routes: Routes = [
  {
    path: 'members', component: MembersPageComponent,
    canActivate: [GuardGuard],
    data: { roles: ['USER_ROLE'] },
  },

  {
    path: 'report', component: ReportPageComponent,
    canActivate: [GuardGuard],
    data: { roles: ['ADMIN_ROLE'] },
  },

  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'search/:keyword', component: ProductListComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignupComponent },
  { path: "user", component: UserComponent, canActivate: [GuardGuard], data: { roles: ['USER_ROLE'] } },
  { path: "admin", component: AdminComponent, canActivate: [GuardGuard], data: { roles: ['ADMIN_ROLE'] } },
  { path: "forbiden", component: ForbidenComponent },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class RoutesModule { }
