import { Veiculo } from './../shared/veiculo';
import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../shared/veiculos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-det',
  templateUrl: './veiculo-det.component.html',
  styleUrls: ['./veiculo-det.component.css']
})
export class VeiculoDETComponent implements OnInit {

  public veiculo: Veiculo = new Veiculo();
  public mensagem:string;
  private id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private veiculoService: VeiculosService
  ) { }

  ngOnInit() {
    let id = this.route.params.subscribe((params) => {

      let id = params['id'];

      if(!id)
        return;

      this.id = id;

      this.veiculoService.getVeiculo(id).subscribe((data) => {
          let res = (data as any);
          this.veiculo = res.data;

      }, err => {
        console.log(err);
        this.mensagem = "<b>Erro:</b> Registro não encontrado";

      });


    });

  }


  delete() {
    if(this.id) {
        this.veiculoService.deleteVeiculo(this.id).subscribe(res => {
          this.router.navigate(['veiculos']);
        }, err => {
          console.log(err);
          this.mensagem = "<b>Erro:</b> Não foi possível deletar o registro.";
        });

    }
  }





}
