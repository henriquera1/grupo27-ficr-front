import { Usuario } from './../../shared/models/usuario';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ReportService } from 'src/app/services/report.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-acompanhar',
  templateUrl: './acompanhar.component.html',
  styleUrls: ['./acompanhar.component.scss']
})
export class AcompanharComponent implements OnInit {
  report = {} as Usuario;
  reports: any = [];

  andamento: string = 'Em andamento';
  concluido: string = 'Concluido';

  sit: string = 'Cano quebrado';
  sit2: string = 'Falta de água';
  sit3: string = 'Deslizamento';
  sit4: string = 'Alagamento';
  sit5: string = 'Falta de Energia';
  sit6: string = 'Dano Estrutural';
  sit7: string = 'Poste derrubado';
  sit8: string = 'Árvore derrubada';
  sit9: string = 'Má sinalização';
  sit10: string = 'Outro(s)';
  
  constructor(
              private rs: ReportService,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.getReport();
  }

  getReport(){
    this.rs.getReport()
      .subscribe(data => {
        this.reports = data;
        console.log(data)
      })
  }

}
