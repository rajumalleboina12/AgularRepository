import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { HelloComponent } from './hello/hello.component';
import { TempRefComponent } from './temp-ref/temp-ref.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventsComponent } from './events/events.component';
import { ConditionComponent } from './condition/condition.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    UsdInrPipe,
    HelloComponent,
    TempRefComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventsComponent,
    ConditionComponent,
    ChildComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
