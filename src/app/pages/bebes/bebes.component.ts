import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';
import { BebesService } from 'src/app/services/bebes.service';

@Component({
  selector: 'app-bebes',
  templateUrl: './bebes.component.html',
  styleUrls: ['./bebes.component.css']
})
export class BebesComponent implements OnInit {

  constructor( public bebesService: BebesService ) { }

  ngOnInit() {
    const instance = M.Tabs.init( document.querySelectorAll('.tabs'), {} );
  }

}
