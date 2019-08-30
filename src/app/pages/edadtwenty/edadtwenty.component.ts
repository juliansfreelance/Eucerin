import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edadtwenty',
  templateUrl: './edadtwenty.component.html',
  styleUrls: ['./edadtwenty.component.css']
})
export class EdadtwentyComponent implements OnInit {

  options = {};
  constructor() { }

  ngOnInit() {
    const elems = document.querySelectorAll('.fixed-action-btn');
    const instances = M.FloatingActionButton.init(elems, this.options);
  }

}
