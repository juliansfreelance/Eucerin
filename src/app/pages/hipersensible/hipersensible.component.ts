import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-hipersensible',
  templateUrl: './hipersensible.component.html',
  styleUrls: ['./hipersensible.component.css']
})
export class HipersensibleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
