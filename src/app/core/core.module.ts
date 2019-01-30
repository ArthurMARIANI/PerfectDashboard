import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from '../shared/modules/shared.module';
import {RouterModule} from '@angular/router';
import {Error404Component} from './error404/error-404.component';
import {ProgressBarService} from './shared/progress-bar.service';
import { MenuBarComponent } from './menubar/menubar.component';
import { SideNavComponent } from './sidebar/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatExpansionModule } from '@angular/material';
import { SidemenuItemComponent } from './sidemenu-item/sidemenu-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
  ],
  exports: [
    FooterComponent,
    MenuBarComponent,
    SideNavComponent,
    SidemenuItemComponent
  ],
  declarations: [
    FooterComponent,
    Error404Component,
    MenuBarComponent,
    SideNavComponent,
    SidemenuItemComponent
  ],
  providers: [
    ProgressBarService
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
