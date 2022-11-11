import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MobileService } from './mobile.service';

@NgModule({
  declarations: [AppComponent], //MobilesComponent
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [MobileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
