import {Routes, RouterModule} from '@angular/router';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculoCADComponent } from './veiculos/veiculo-cad/veiculo-cad.component';
import { VeiculoDETComponent } from './veiculos/veiculo-det/veiculo-det.component';

const routes: Routes = [
  //veículos
  {
    path: '',
    component: VeiculosComponent
  },
  {
     path: 'veiculos', component: VeiculosComponent
  },
  {
    path: 'veiculos/novo', component: VeiculoCADComponent
  },
  {
    path: 'veiculos/editar/:id', component: VeiculoCADComponent
  },
  {
    path: 'veiculos/detalheexcluir/:id', component: VeiculoDETComponent
  }

];

export const RoutingModule = RouterModule.forRoot(routes);
