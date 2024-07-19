import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FontAwesomeModule],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'CloneTrelloAngular';
}


