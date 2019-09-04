import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';
import { AntipigmentoService } from 'src/app/services/antipigmento.service';

@Component({
  selector: 'app-antipigmento',
  templateUrl: './antipigmento.component.html',
  styleUrls: ['./antipigmento.component.css']
})
export class AntipigmentoComponent implements OnInit {

  constructor( public antipigmentoService: AntipigmentoService ) { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
