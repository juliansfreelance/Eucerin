import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';
import { ComplicacionesService } from 'src/app/services/complicaciones.service';

@Component({
  selector: 'app-complicaciones',
  templateUrl: './complicaciones.component.html',
  styleUrls: ['./complicaciones.component.css']
})
export class ComplicacionesComponent implements OnInit {
  constructor(public complicacionesService: ComplicacionesService) { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
