import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  s: string;
  data: Observable<any>;
  public username: string;
  public pass: string;
  constructor(public http: HttpClient , private router: Router, public toastController: ToastController) {}
  navigatetohome() {
    this.router.navigate(['home']);
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  async presentToast(st: string) {
    const toast = await this.toastController.create({
      message: st,
      duration: 2000
    });
    toast.present();
  }

    buttonClick()
  {
    let url = 'http://192.168.90.182/app_dev.php/api/login_check'
    let postdata = new FormData();
    postdata.append('username',this.username);
    postdata.append('password',this.pass);
    this.data = this.http.post<any>(url,postdata);
    this.data.subscribe(data => {
      console.log(data['message']);},
      (err) => {
        // this.loading = false;
        console.log(err);
        this.presentToast("Authentification échouée !");

      },
          () => {
            // this.loading = false;
            // this.toaster.lunchSuccessToast("you are welcome","Access");
            this.presentToast("Bienvenue !");
            //alert("Welcome !");
            this.navigatetohome();

    });

  }
}
