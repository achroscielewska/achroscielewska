import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'bank', loadChildren: () => import('./modules/bank/bank.module').then(m => m.BankModule) },
  { path: 'warehouse', loadChildren: () => import('./modules/warehouse/warehouse.module').then(m => m.WarehouseModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
