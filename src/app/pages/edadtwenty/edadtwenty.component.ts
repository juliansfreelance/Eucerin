import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.js';
import { EdadtwentyService } from 'src/app/services/edadtwenty.service.js';


@Component({
  selector: 'app-edadtwenty',
  templateUrl: './edadtwenty.component.html',
  styleUrls: ['./edadtwenty.component.css']
})
export class EdadtwentyComponent implements OnInit {

  constructor( public edadtwentyService: EdadtwentyService ) { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
