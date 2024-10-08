import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  template: `
    <div [class]="sidebar">
      <p>
        SIDEBAR works!
      </p>
    </div>
  `,
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent {
  sidebar = 'sidebar';
}
