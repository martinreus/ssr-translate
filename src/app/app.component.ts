import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LocaleConfig } from './locale-lang-config';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      city: ['', [Validators.required]],
      state: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]]
    });
  }
}
