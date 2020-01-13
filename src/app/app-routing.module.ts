import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/agencies",
    pathMatch: "full"
  },
  {
    path: "agencies",
    loadChildren: "./modules/agencies/agencies.module#AgenciesModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
