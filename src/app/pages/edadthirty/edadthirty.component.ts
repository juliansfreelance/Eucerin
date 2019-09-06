import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.js';
import { EdadthirtyService } from '../../services/edadthirty.service';

@Component({
  selector: 'app-edadthirty',
  templateUrl: './edadthirty.component.html',
  styleUrls: ['./edadthirty.component.css']
})
export class EdadthirtyComponent implements OnInit {

  constructor( public edadthirtyService: EdadthirtyService ) { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
