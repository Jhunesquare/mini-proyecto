import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini_proyecto';
  lineas: number = 0;
  mensaje = '';
  resultado = '';

  cifrarMensaje(): void {
    let resultado = '';
    for (let i = 0; i < this.lineas; i++) {
      for (let j = i; j < this.mensaje.length; j += this.lineas) {
        resultado += this.mensaje[j];
      }
    }
    this.resultado = resultado;
  }

  descifrarMensaje(): void {
    let resultado = '';
    const longitudLinea = Math.ceil(this.mensaje.length / this.lineas);
    for (let i = 0; i < longitudLinea; i++) {
      for (let j = i; j < this.mensaje.length; j += longitudLinea) {
        resultado += this.mensaje[j];
      }
    }
    this.resultado = resultado;
  }
}
