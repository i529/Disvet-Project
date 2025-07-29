import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  imports: [FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  
  form = {
    nome: '',
    email: '',
    menssage: ''
  }
  
  constructor(private http: HttpClient){}

  sendMenssage() {

    if(this.form.nome === '' || this.form.email === '' || this.form.menssage === ''){
        alert('preencha os campos corretamente')
    } else {
      this.http.post(`http://localhost:3000/api/send-mail`, this.form)
          .subscribe({
            next: () => alert('Mensagem enviada!'),
            error: () => alert('Mensagem não enviada, tente novamente.')
          })
    }
  }
}
