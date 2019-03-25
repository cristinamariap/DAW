import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private medicalUnits = [
    {
      name: 'unit1',
      location: 'location1'
    },
    {
      name: 'unit2',
      location: 'location2'
    }
  ];

  private navLinks = [
    {path : 'home', label : 'Home'},
    {path : 'about', label : 'About'}
  ];

  constructor(private translate: TranslateService) {
  }

  clickMe() {
    console.log('caca');
    this.medicalUnits[0].name ='caca';
  }

  changeLanguage(lang: string) {
    console.log({lang});
    this.translate.use(lang);
  }
}
