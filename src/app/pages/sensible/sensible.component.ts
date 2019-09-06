import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.js';
import { SensibleService } from 'src/app/services/sensible.service.js';

@Component({
  selector: 'app-sensible',
  templateUrl: './sensible.component.html',
  styleUrls: ['./sensible.component.css']
})
export class SensibleComponent implements OnInit {

  constructor( public sensibleService: SensibleService ) { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
