import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-grasa',
  templateUrl: './grasa.component.html',
  styleUrls: ['./grasa.component.css']
})
export class GrasaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
