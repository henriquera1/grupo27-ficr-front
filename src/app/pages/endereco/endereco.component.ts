import { ReportService } from './../../services/report.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/shared/models/usuario';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  report: Usuario = {};

  form = this.fb.group({
    nome: '',
    sobrenome: '',
    cpf: '',
    bairro: '',
    endereco: '',
    ocorrencia: '',
  });

  constructor(private fb:FormBuilder,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService,
              private rs: ReportService,
              )
              { }

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
      sobrenome: new FormControl('', [Validators.required, Validators.minLength(2)]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
      bairro: new FormControl('', [Validators.required, Validators.minLength(2)]),
      endereco: new FormControl('', [Validators.required, Validators.minLength(4)]),
      ocorrencia: new FormControl('', Validators.required), 
    })
  }

  postReport(){
    this.report = new Usuario('','','','','',0,false)
    this.report.nome = this.form.get('nome')?.value;
    this.report.sobrenome = this.form.get('sobrenome')?.value;
    this.report.cpf = this.form.get('cpf')?.value;
    this.report.bairro = this.form.get('bairro')?.value;
    this.report.endereco = this.form.get('endereco')?.value;
    this.report.ocorrencia = this.form.get('ocorrencia')?.value;
    this.report.situacao = false;

    this.showSpinner();
    this.spinner.show();
    this.rs.postReport(this.report).subscribe(()=>{
      this.showSuccess();
    }).add(()=> this.spinner.hide())
  }

  showSuccess() {
    this.toastr.info('Acompanhe sua denúncia no menu principal.', 'Reportado com sucesso!');
  }
  showError() {
    this.toastr.error('Erro ao cadastrar denúncia.', 'Erro!');
  }

 showSpinner(){
   this.spinner.show();
   setTimeout(() => {
     this.spinner.hide();
   }, 2000);
 }

}
