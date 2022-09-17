import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from '../first-page/first-page.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
{
  path:"home",
  component:HomeComponent,
  children: [
    { path: 'firstPage', component: FirstPageComponent },
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
