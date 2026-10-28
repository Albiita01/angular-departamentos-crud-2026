import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepartamentos } from './services/service.departamento';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponentTs } from './components/details-component.ts/details-component.ts';
import { UpdateComponentTs } from './components/update-component.ts/update-component.ts';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    CreateComponent,
    DetailsComponentTs,
    UpdateComponentTs,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceDepartamentos],
  bootstrap: [App],
})
export class AppModule {}
