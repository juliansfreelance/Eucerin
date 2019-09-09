import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import * as M from '../../../assets/js/materialize.js';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  pop = false;
  constructor( private location: Location,
               private route: ActivatedRoute,
               public productoService: ProductoService ) { }
  goBack() {
    $('#productoModal').modal('close');
    this.location.back();
    $('body').css('overflow', 'auto');
  }
  abrirMedia() {
    $('.media').fadeIn();
    this.pop = true;
  }
  cerrarMedia() {
    $('.media').fadeOut();
    this.pop = false;
  }
  ngOnInit() {

    $('.media').hide();
    $('.modal').modal({ dismissible: false });
    $('#productoModal').modal('open');

    this.route.params.subscribe( parametros => {
    this.productoService.cargarProducto( parametros[ 'id' ] );
    });
  }

}
