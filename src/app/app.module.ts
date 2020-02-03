import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { LocaleConfig, browserLocaleFactory } from './locale-lang-config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LocaleConfig,
      useFactory: browserLocaleFactory
    }
  ]
})
export class AppModule {}
