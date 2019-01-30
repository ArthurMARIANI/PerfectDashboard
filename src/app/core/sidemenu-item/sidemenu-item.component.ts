import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { IMenu } from '../sidebar/menu-element';

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-sidemenu-item',
  templateUrl: './sidemenu-item.component.html',
  styleUrls: ['./sidemenu-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(-180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})


export class SidemenuItemComponent implements OnInit {
  @Input() menu: IMenu;
  @Input() depth: number;
  expanded = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.depth = undefined ? 0 : this.depth;
  }


  public onItemSelected(): void {
    if (this.menu && this.menu.sub) {
      this.expanded = !this.expanded;
    } else if (this.menu.link) {
      this.router.navigate([this.menu.link]);
    }
  }
}
