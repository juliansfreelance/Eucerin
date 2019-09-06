import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const instances1 = M.Sidenav.init( document.querySelectorAll('.sidenav'), { draggable: true, preventScrolling: true } );
    const instances2 = M.Collapsible.init( document.querySelectorAll('.collapsible'), {} );
  }

}
