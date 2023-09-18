import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  template: '<h1>{{ title }}</h1>',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule],
})
export class HeaderComponent {
  title = 'My Notes';
}
