import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  site_1:string;
  site_2:string;
  error:string;
  constructor(public navCtrl: NavController, private _HTTP: HttpClient, private router: Router) {}
  getRemotedata(){
    return this._HTTP.get('http://192.168.90.182/app_dev.php/api/sites/list/10');
  }
  ionViewDidEnter() {
    this.getRemotedata().subscribe(
        data => {
          // Set the data to display in the template
          this.site_1 = data['sites']['0']['siteName'];
          this.site_1 == JSON.stringify(this.site_1);

          this.site_2 = data['sites']['1']['siteName'];
          this.site_2 == JSON.stringify(this.site_2);

          console.log(this.site_2);
        },
        err => {
          // Set the error information to display in the template
          this.error = 'An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}';
        }
    );
  }
  onLoadSite() {
    this.router.navigate(['stats']);
  }
}
