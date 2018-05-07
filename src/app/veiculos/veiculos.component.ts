import { VeiculosService } from './shared/veiculos.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Veiculo } from './shared/veiculo';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css'],
  providers: [VeiculosService]
})
export class VeiculosComponent implements OnInit, OnDestroy {

  public veiculos: Veiculo[] = new Array<Veiculo>();
  public mensagem:string;
  private inscricao;

  constructor(
    private veiculoService: VeiculosService,
    private app:AppComponent
  ) {}

  ngOnInit(){
    this.inscricao = this.veiculoService.getVeiculos()
          .subscribe((data) => {
              let res = (data as any);
              this.veiculos = res.data;

    }, (err) => {
      console.log(err);
      this.app.mensagem = "<b>Erro:</b> Registro não encontrado";
      this.app.tipoMensagem = "danger";
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
