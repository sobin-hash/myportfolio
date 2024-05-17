import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DescribeComponent } from './describe/describe.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'describe',component:DescribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
