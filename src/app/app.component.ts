import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public progressBarMode = 'determinate';

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang(environment.defaultLanguage);
  }
}
