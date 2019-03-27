import { Component } from '@angular/core';
import { Quotes } from   './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QUOTES';
  // quotes = [
  //   new Quotes(1,'Do not say maybe if you want to say no','Ryan Holiday'),
  //   new Quotes(2,'Do not wait, the time will never be just right','Napoleon Hill'), 
  //   new Quotes(3,'I never dreamed about success.I worked towards it','Estee Lauder'),
  //   new Quotes(4,'It is going to be hard , but hard does not mean impossible','Anonymous'),
  // ]
}

