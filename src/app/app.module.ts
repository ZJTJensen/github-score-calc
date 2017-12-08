import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { InputComponent } from './input/input.component';
import { ServiceService } from './service.service';


@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    InputComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
