import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { browserLocaleFactory, LocaleConfig } from './locale-lang-config';

@NgModule({
  imports: [AppModule],
  providers: [
    {
      provide: LocaleConfig,
      useFactory: browserLocaleFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppClientModule {}
