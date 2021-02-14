import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { CoursesComponent } from './courses/courses.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    BootstrapPanelComponent,
    CoursesComponent,
    InputFormatDirective,
    ContactFormComponent
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
