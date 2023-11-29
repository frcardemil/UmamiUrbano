import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPage } from './inicio.page';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { BuscarComponent } from 'src/app/components/buscar/buscar.component';
import { EscribirComponent } from 'src/app/components/escribir/escribir.component';
import { PerfilComponent } from 'src/app/components/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: 'escribir',
        component: EscribirComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
