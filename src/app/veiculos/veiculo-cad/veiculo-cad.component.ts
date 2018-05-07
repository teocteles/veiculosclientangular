import { VeiculosService } from './../shared/veiculos.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Veiculo } from '../shared/veiculo';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-veiculo-cad',
  templateUrl: './veiculo-cad.component.html',
  styleUrls: ['./veiculo-cad.component.css']
})
export class VeiculoCADComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public veiculo: Veiculo = new Veiculo();
  public titulo: string;
  public tituloBotao: string = "Cadastrar";
  private id:number;


  private inscricao;
  public mensagem:string;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private veiculoService: VeiculosService,
    private app: AppComponent
  ) {
    this.form = formBuilder.group({
      veiculo: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      marca: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      ano: ['', [
        Validators.required,
        Validators.maxLength(4)
      ]],
      descricao: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      vendido: []

     });

   }

  ngOnInit() {
    let id = this.route.params.subscribe((params) => {

      let id = params['id'];

      this.titulo = id ? 'Editar Veículo' : 'Cadastrar um veículo';

      if(!id)
        return;

      this.tituloBotao = "Atualizar";
      this.id = id;

      this.veiculoService.getVeiculo(id).subscribe((data) => {
          let res = (data as any);
          this.veiculo = res.data;

      }, err => {
        console.log(err);
        this.app.mensagem  = "<b>Erro:</b> Registro não encontrado";
        this.app.tipoMensagem = "danger";
      });


    });


  }

  save() {
    let veiculoValue = this.form.value;

        console.log(veiculoValue);

        if(this.id) {

            veiculoValue.id = this.id;
            console.log(veiculoValue);

            this.veiculoService.updateVeiculo(veiculoValue).subscribe(res => {
              this.app.mensagem = "Atualizado com sucesso!";
              this.app.tipoMensagem = "success";

              this.router.navigate(['veiculos']);

            }, err => {
              console.log(err);
              this.app.mensagem = "Erro ao atualizar! Favor verifique se todos os dados foram digitados corretamente.";
              this.app.tipoMensagem = "danger";
            });

        }else {
            this.veiculoService.addVeiculo(veiculoValue).subscribe(res => {

              this.app.mensagem = "Cadastrado com sucesso!";
              this.app.tipoMensagem = "success";

              this.router.navigate(['veiculos']);
            }, err => {
              console.log(err);
              this.app.mensagem = "Erro ao cadastrar! Favor verifique se todos os dados foram digitados corretamente.";
              this.app.tipoMensagem = "danger";
            });
        }

  }


  ngOnDestroy(): void {
  }

}
