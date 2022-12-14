import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotifyMeComponent } from './notify-me/notify-me.component';

const routes:Route[]=[
  {path:'',redirectTo:"notify-me",pathMatch:"full"},
  {path:'notify-me',component:NotifyMeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
      NotifyMeComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
