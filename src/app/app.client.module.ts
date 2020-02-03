import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { browserLocaleFactory, LocaleConfig } from './locale-lang-config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [AppModule, BrowserAnimationsModule],
  providers: [
    {
      provide: LocaleConfig,
      useFactory: browserLocaleFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppClientModule {}
