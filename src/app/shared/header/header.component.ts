import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.js';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Ruta;
  Header;
  constructor(private location: Location,
              private router: ActivatedRoute) { }

  ngOnInit() {
    const instances1 = M.Sidenav.init( document.querySelectorAll('.sidenav'), { draggable: true, preventScrolling: true } );
    const instances2 = M.Collapsible.init( document.querySelectorAll('.collapsible'), {} );
    this.Ruta =  this.router.snapshot.url[0].path;
    switch (this.Ruta) {
      case 'antiedad25':
        this.Header = 'PREVENCIÓN ENVEJECIMIENTO EDAD 25 A 35 AÑOS';
        break;
      case 'antiedad35':
        this.Header = 'ANTIENVEJECIMIENTO EDAD 35 A 45 AÑOS';
        break;
      case 'antiedad45':
        this.Header = 'ANTIENVEJECIMIENTO EDAD +45 AÑOS';
        break;
      case 'antipigmento':
        this.Header = 'ANTIPIGMENTO';
        break;
      case 'pielgrasaomixta':
        this.Header = 'PIEL GRASA O MIXTA';
        break;
      case 'bebesyniños':
        this.Header = 'BEBES Y NIÑOS';
        break;
      case 'pielsensible':
        this.Header = 'PIEL SENSIBLE';
        break;
      case 'pielhipersensible':
        this.Header = 'PIEL HIPERSENSIBLE';
        break;
      case 'pielseca':
          this.Header = 'PIEL SECA';
          break;
      case 'pielsecaysuscomplicaciones':
          this.Header = 'PIEL SECA Y SUS COMPLICACIONES';
          break;
      default:
        this.Header = 'RUTINAS';
        break;
    }
  }
}
