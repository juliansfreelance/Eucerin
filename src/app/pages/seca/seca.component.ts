import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-seca',
  templateUrl: './seca.component.html',
  styleUrls: ['./seca.component.css']
})
export class SecaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
