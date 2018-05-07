import { Component, Input } from '@angular/core';
import { ExecSyncOptionsWithBufferEncoding } from 'child_process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public mensagem:string;
  public tipoMensagem:string;
}
