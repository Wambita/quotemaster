import { Component } from '@angular/core';
import { Quotes } from   './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QUOTES';
  quotes = [
    new Quotes(1,'Dont say maybe if you want to say no'),
    new Quotes(2,'Do not wait, the time will never be just right'), 
    new Quotes(3,'I never dreamed about success.I worked towards it'), 
    new Quotes(4,'It is going to be hard , but hard does not mean impossible'),
  ]

}

