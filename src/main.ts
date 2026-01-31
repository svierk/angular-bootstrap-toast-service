import { enableProdMode, importProvidersFrom } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, AppRoutingModule, MatIconModule)],
})
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err));
