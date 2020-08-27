import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  error: string;
  dat: string;
  temperature:string;
    ACV1:string;
    ACV2:string;
    ACV3:string;
    ACI1:string;
    ACI2:string;
    ACI3:string;
    ACE1:string;
    ACE2:string;
    ACE3:string;
    ACP1:string;
    ACP2:string;
    ACP3:string;
    ACF1:string;
    ACF2:string;
    ACF3:string;
    BTSV:string;
    BTSI:string;
    BTSP:string;

    BATV:string;
    BATI:string;
    BATP:string;
    BATE:string;

    etat_de_secteur:string;
    alarme_electrogene:string;
    AC_general:string;
    BAIE2:string;
    cout:string;
  constructor(private http: HttpClient) { }
  getRemotedata(){
    return this.http.get('http://192.168.90.182/app_dev.php/api/mesures/list/10/4');
  }
  ionViewDidEnter() {
    this.getRemotedata().subscribe(
        data => {
          // Set the data to display in the template
          this.dat = data['site']['boxes'][0]['devices'];
          for (var i=0;i<34;i++){
              if (data['site']['boxes']['0']['devices'][i]['id']=='311')
              {this.dat=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}
              if (data['site']['boxes']['0']['devices'][i]['id']=='312')
              {this.temperature=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='336')
              {this.ACV1=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='336')
              {this.ACV2=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur2']}


              if (data['site']['boxes']['0']['devices'][i]['id']=='336')
              {this.ACV3=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur3']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='337')
              {this.ACI1=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='337')
              {this.ACI2=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur2']}


              if (data['site']['boxes']['0']['devices'][i]['id']=='337')
              {this.ACI3=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur3']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='339')
              {this.ACE1=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='339')
              {this.ACE2=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur2']}


              if (data['site']['boxes']['0']['devices'][i]['id']=='339')
              {this.ACE3=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur3']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='338')
              {this.ACP1=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='338')
              {this.ACP2=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur2']}


              if (data['site']['boxes']['0']['devices'][i]['id']=='338')
              {this.ACP3=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur3']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='342')
              {this.ACF1=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='342')
              {this.ACF2=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur2']}


              if (data['site']['boxes']['0']['devices'][i]['id']=='342')
              {this.ACF3=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur3']}
              if (data['site']['boxes']['0']['devices'][i]['id']=='302')
              {this.BTSV=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='306')
              {this.BTSI=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='318')
              {this.BTSP=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='301')
              {this.BATV=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='305')
              {this.BATI=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='315')
              {this.BATP=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='317')
              {this.BATE=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}
              if (data['site']['boxes']['0']['devices'][i]['id']=='310')
              {this.etat_de_secteur=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='304')
              {this.alarme_electrogene=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='356')
              {this.AC_general=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}

              if (data['site']['boxes']['0']['devices'][i]['id']=='355')
              {this.BAIE2=data['site']['boxes']['0']['devices'][i]['mesures']['0']['valeur1']}
                }
            this.cout=data['site']['coutKwatt'];
            this.cout == JSON.stringify(this.cout);

            this.dat == JSON.stringify(this.dat);
            this.temperature == JSON.stringify(this.temperature);
            this.ACV1 == JSON.stringify(this.ACV1);
            this.ACV2 == JSON.stringify(this.ACV2);
            this.ACV3 == JSON.stringify(this.ACV3);
            this.ACI1 == JSON.stringify(this.ACI1);
            this.ACI2 == JSON.stringify(this.ACI2);
            this.ACI3 == JSON.stringify(this.ACI3);
            this.ACE1 == JSON.stringify(this.ACE1);
            this.ACE2 == JSON.stringify(this.ACE2);
            this.ACE3 == JSON.stringify(this.ACE3);
            this.ACP1 == JSON.stringify(this.ACP1);
            this.ACP2 == JSON.stringify(this.ACP2);
            this.ACP3 == JSON.stringify(this.ACP3);
            this.ACF1 == JSON.stringify(this.ACF1);
            this.ACF2 == JSON.stringify(this.ACF2);
            this.ACF3 == JSON.stringify(this.ACF3);
            this.BTSV == JSON.stringify(this.BTSV);
            this.BTSI == JSON.stringify(this.BTSI);
            this.BTSP == JSON.stringify(this.BTSP);

            this.BATV == JSON.stringify(this.BATV);
            this.BATI == JSON.stringify(this.BATI);
            this.BATP == JSON.stringify(this.BATP);
            this.BATE == JSON.stringify(this.BATE);

            this.etat_de_secteur == JSON.stringify(this.etat_de_secteur);
            this.alarme_electrogene == JSON.stringify(this.alarme_electrogene);
            this.AC_general == JSON.stringify(this.AC_general);
            this.BAIE2 == JSON.stringify(this.BAIE2);
            console.log(this.BATI);
        },
        err => {
          // Set the error information to display in the template
          this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
        }
    );
  }
  ngOnInit() {
  }

}
