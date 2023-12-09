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
import { PropertyBindingComponent } from './concepts/property-binding/property-binding.component';
import { EventBindingComponent } from './concepts/event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './concepts/two-way-binding/two-way-binding.component';
import { DirectiveNgIfComponent } from './concepts/directive-ng-if/directive-ng-if.component';
import { DirectiveNgStyleComponent } from './concepts/directive-ng-style/directive-ng-style.component';
import { DirectiveNgClassComponent } from './concepts/directive-ng-class/directive-ng-class.component';
import { DirectiveNgForComponent } from './concepts/directive-ng-for/directive-ng-for.component';
import { Assignment3Component } from './practice/assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlyshowoddComponent,
    IsActiveComponent,
    ServerManagerComponent,
    ServerFormComponent,
    ServersComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    DirectiveNgIfComponent,
    DirectiveNgStyleComponent,
    DirectiveNgClassComponent,
    DirectiveNgForComponent,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
