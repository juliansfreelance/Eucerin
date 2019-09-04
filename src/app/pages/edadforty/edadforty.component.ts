import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-edadforty',
  templateUrl: './edadforty.component.html',
  styleUrls: ['./edadforty.component.css']
})
export class EdadfortyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
