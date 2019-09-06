import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.js';
import { HipersensibleService } from 'src/app/services/hipersensible.service.js';

@Component({
  selector: 'app-hipersensible',
  templateUrl: './hipersensible.component.html',
  styleUrls: ['./hipersensible.component.css']
})
export class HipersensibleComponent implements OnInit {

  constructor( public hipersensibleService: HipersensibleService ) { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
