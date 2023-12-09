import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlyshowoddComponent } from './projects/onlyshowodd/onlyshowodd.component';
import { IsActiveComponent } from './projects/is-active/is-active.component';
import { ServerManagerComponent } from './projects/server-manager/server-manager.component';
import { ServerFormComponent } from './projects/server-manager/server-form/server-form.component';
import { ServersComponent } from './projects/server-manager/servers/servers.component';
import { StringInterpolationComponent } from './concepts/string-interpolation/string-interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlyshowoddComponent,
    IsActiveComponent,
    ServerManagerComponent,
    ServerFormComponent,
    ServersComponent,
    StringInterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
