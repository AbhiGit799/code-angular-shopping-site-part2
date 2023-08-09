import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
//import * as feather from 'feather-icons';
const feather = require('feather-icons');   //npm i --save-dev @types/feather-icons  
import Swal from 'sweetalert2'
import {Location} from "@angular/common";
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
  
})
export class AppComponent {

  name = 'Angular ' + VERSION.major;  
  title = 'customerportal';


  constructor(private _location:Location,private _translate: TranslateService)
  {
      _translate.addLangs(['en', 'hi']);
      _translate.setDefaultLang('en');
  }

  goback()
  {
   this._location.back();
  }

  slides = [
    { img: 'https://via.placeholder.com/600.png/09f/fff' },
    { img: 'https://via.placeholder.com/600.png/021/fff' },
    { img: 'https://via.placeholder.com/600.png/321/fff' },
    { img: 'https://via.placeholder.com/600.png/422/fff' },
    { img: 'https://via.placeholder.com/600.png/654/fff' },
  ];

  slideConfig = { 
    slidesToShow: 4, 
    slidesToScroll: 4, 
    autoplay:true,
    
  };

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };
  //



  changeLang(language: string) {
    this._translate.use(language);
  }

}


