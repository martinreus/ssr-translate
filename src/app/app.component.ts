import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LocaleConfig } from './locale-lang-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(transloco: TranslocoService, localeConf: LocaleConfig) {
    transloco.setActiveLang(localeConf.language);
  }
}
