import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-edadthirty',
  templateUrl: './edadthirty.component.html',
  styleUrls: ['./edadthirty.component.css']
})
export class EdadthirtyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
