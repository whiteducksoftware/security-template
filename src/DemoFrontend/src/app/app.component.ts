import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoFrontend';
  discordApiToken = '8dyfuiRvqFvVc3RRr_edRk-fz__JItpP'; // Todo: Remove this later, this is just for testing purposes

  endsWith(x: string, y: string) {
    let index = x.lastIndexOf(y);
    return x.lastIndexOf(y) === x.length - y.length;
  }
}
