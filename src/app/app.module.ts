import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestWithScrollComponent } from './test-with-scroll/test-with-scroll.component';
import { RouterModule, Routes } from '@angular/router';
import { SimpleAutocompleteComponent } from './simple-autocomplete/simple-autocomplete.component';
import { OptionsScrollDirective } from './options-scroll.directive';




@NgModule({
  declarations: [
    AppComponent,
    TestWithScrollComponent,
    SimpleAutocompleteComponent,
    OptionsScrollDirective],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatAutocompleteModule,
  HttpClientModule,
  RouterModule.forRoot([
    { path: 'test', component: TestWithScrollComponent },
    { path: 'simple', component: SimpleAutocompleteComponent }
  ])],
  providers: [],
  bootstrap: [AppComponent]
}) 
  
    
export class AppModule { }
