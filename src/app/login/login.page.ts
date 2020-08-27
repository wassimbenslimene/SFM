import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
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
  constructor(public http: HttpClient , private router: Router) {}
  navigatetohome() {
    this.router.navigate(['home']);
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

    buttonClick()
  {
    let url = 'http://192.168.90.182/app_dev.php/api/login_check'
    let postdata = new FormData();
    postdata.append('username',this.username);
    postdata.append('password',this.pass);
    this.data = this.http.post<any>(url,postdata);
    this.data.subscribe(data => {
      console.log(data['message']);
    });
    this.delay(7000);
    if (this.data['message']=='Authentification effectuée avec succès')
    {
      alert(this.data['message']);
      this.navigatetohome();
    }
    else
    {

      alert("Authentification échouée");
      console.log(this.data['message']);
    }
  }
}
