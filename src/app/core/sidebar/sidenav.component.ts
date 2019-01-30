import { Component } from '@angular/core';
import { IMenu, MENUS } from './menu-element';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent {

  public menus: IMenu[] = MENUS;

  constructor() {
  }

}
