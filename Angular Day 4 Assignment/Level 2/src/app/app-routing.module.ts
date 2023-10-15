import { Subpage2Component } from './subpage2/subpage2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Subpage1Component } from './subpage1/subpage1.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent, children : [
    { path: 'subpage1', component: Subpage1Component },
    { path: 'subpage2', component: Subpage2Component },

  ]},

  { path: 'products/:category/:id', component: ProductDetailComponent },

  {path: 'about', component:AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
