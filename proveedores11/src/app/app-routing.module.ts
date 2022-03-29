import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './alta/alta.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RequisisionComponent } from './requisision/requisision.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'app', component: NavigationComponent,
    children: 
      [
        { path: 'alta', component: AltaComponent },
        { path: 'facturacion', component: FacturacionComponent },
        { path: 'cotizacion', component: CotizacionComponent },
        { path: 'requisision', component: RequisisionComponent }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
