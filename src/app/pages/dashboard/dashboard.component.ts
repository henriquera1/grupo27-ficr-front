import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChatBotComponent } from 'src/app/chat-bot/chat-bot.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();

    this.dialog.open(ChatBotComponent, dialogConfig);

  }


}
