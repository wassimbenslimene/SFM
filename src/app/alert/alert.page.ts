import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  error:string;
  alertes:string[][];
  label:any;
  i:any;
  


  constructor(private _HTTP: HttpClient) {}
  getRemotedata(){
    return this._HTTP.get('http://192.168.90.182/app_dev.php/api/alert_notifications/list/1');
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }


  ngOnInit() {
  }
}
