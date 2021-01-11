import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSalaComponent } from './create-sala/create-sala.component';
import { DetailsSalaComponent } from './details-sala/details-sala.component';
import { ListSalaComponent } from './list-sala/list-sala.component';
import { UpdateSalaComponent } from './update-sala/update-sala.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateSalaComponent,
    DetailsSalaComponent,
    ListSalaComponent,
    UpdateSalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
