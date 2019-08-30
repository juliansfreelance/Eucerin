import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options = {draggable: true, preventScrolling: true};
  options1 = {};
  constructor() { }

  ngOnInit() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, this.options);
    const elems1 = document.querySelectorAll('.collapsible');
    const instances1 = M.Collapsible.init(elems1, this.options1);
  }

}
