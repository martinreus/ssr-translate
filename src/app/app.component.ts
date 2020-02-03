import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LocaleConfig } from './locale-lang-config';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(transloco: TranslocoService, localeConf: LocaleConfig, private fb: FormBuilder) {
    transloco.setActiveLang(localeConf.language);
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      address: [''],
      city: [''],
      state: ['']
    });
  }
}
