import { DetailsSalaComponent } from './details-sala/details-sala.component';
import { CreateSalaComponent } from './create-sala/create-sala.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSalaComponent } from './list-sala/list-sala.component';
import { UpdateSalaComponent } from './update-sala/update-sala.component';

const routes: Routes = [
  { path: '', redirectTo: 'salas', pathMatch: 'full' },
  { path: 'salas', component: ListSalaComponent },
  { path: 'add', component: CreateSalaComponent },
  { path: 'update/:id', component: UpdateSalaComponent },
  { path: 'details/:id', component: DetailsSalaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
