import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponentTs } from './components/details-component.ts/details-component.ts';
import { UpdateComponentTs } from './components/update-component.ts/update-component.ts';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create", component: CreateComponent },
  { path: "details/:id/:nombre/:localidad", component: DetailsComponentTs },
  { path: "update/:id", component: UpdateComponentTs },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
