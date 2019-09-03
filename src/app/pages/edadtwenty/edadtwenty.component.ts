import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';


@Component({
  selector: 'app-edadtwenty',
  templateUrl: './edadtwenty.component.html',
  styleUrls: ['./edadtwenty.component.css']
})
export class EdadtwentyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
