import { Component, OnInit } from '@angular/core';
import * as menus from '../../../assets/routes.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  readonly menus = menus['default'];

  constructor() {

  }

  ngOnInit() {

  }
 }