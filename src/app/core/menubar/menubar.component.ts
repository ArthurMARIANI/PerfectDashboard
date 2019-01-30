import { Component, OnInit, Inject, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']

})
export class MenuBarComponent implements OnInit {

  public progressBarMode = 'none';

  @Input() drawer: MatSidenav;

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private translateService: TranslateService,
              private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
  }

  changeLanguage(language: string): void {

  (async () => {
      await this.translateService.use(language).toPromise();
    })();
  }

}
