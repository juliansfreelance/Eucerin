import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';
import { EdadfortyService } from 'src/app/services/edadforty.service.js';

@Component({
  selector: 'app-edadforty',
  templateUrl: './edadforty.component.html',
  styleUrls: ['./edadforty.component.css']
})
export class EdadfortyComponent implements OnInit {

  constructor( public edadfortyService: EdadfortyService ) { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
