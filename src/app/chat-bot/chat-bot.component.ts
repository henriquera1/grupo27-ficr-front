import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {

  perguntas: any;

  numero: number = 0;

  form = this.fb.group({
    escolha: '',
  });

  url = 'http://127.0.0.1:5000/pergunta';

  constructor(private http: HttpClient, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      escolha: new FormControl(''),
    })
  }

  public PostResposta(): any{
    this.numero = this.form.get('escolha')?.value;

    return this.http.get(this.url + '/' + this.numero).subscribe(res => { 
      this.perguntas = res;
      console.log(this.perguntas)
    });
      
  }

}
