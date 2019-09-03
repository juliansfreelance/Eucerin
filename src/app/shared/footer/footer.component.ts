import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
    const instances = M.FloatingActionButton.init( document.querySelectorAll('.fixed-action-btn'), { hoverEnabled: false } );
  }

}
