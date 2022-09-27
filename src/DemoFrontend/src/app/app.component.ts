import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoFrontend';
  discordApiToken = '8dyfuiRvqFvVc3RRr_edRk-fz__JItpP'; // Todo: Remove this later, this is just for testing purposes

  search(term: string) {
    var href = document.location.href,
      searchTerm = href.substring(href.indexOf("term=") + 5);
    document.write("<div>You searched for: " + searchTerm + "</div>");
  }
}
