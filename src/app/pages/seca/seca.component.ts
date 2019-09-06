import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.js';
import { SecaService } from 'src/app/services/seca.service.js';

@Component({
  selector: 'app-seca',
  templateUrl: './seca.component.html',
  styleUrls: ['./seca.component.css']
})
export class SecaComponent implements OnInit {

  constructor( public secaService: SecaService ) { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
