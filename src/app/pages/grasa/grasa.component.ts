import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';
import { GrasaService } from 'src/app/services/grasa.service.js';

@Component({
  selector: 'app-grasa',
  templateUrl: './grasa.component.html',
  styleUrls: ['./grasa.component.css']
})
export class GrasaComponent implements OnInit {

  constructor( public grasaService: GrasaService ) { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
