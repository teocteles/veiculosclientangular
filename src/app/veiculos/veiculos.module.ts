import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosComponent } from './veiculos.component';
import { VeiculosService } from './shared/veiculos.service';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VeiculoCADComponent } from './veiculo-cad/veiculo-cad.component';
import { VeiculoDETComponent } from './veiculo-det/veiculo-det.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    VeiculosComponent,
    VeiculoCADComponent,
    VeiculoDETComponent
  ],
  exports:[
    VeiculosComponent,
    VeiculoCADComponent
  ],
  providers: [
    VeiculosService
  ]
})
export class VeiculosModule { }
