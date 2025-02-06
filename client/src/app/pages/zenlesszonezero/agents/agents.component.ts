import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { DataService } from '../../../services/data.service';
import { ChangeDetectorRef } from '@angular/core';
import { LocalStorageService } from '../../../local-storage.service';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from '../../../navbar/searchbar/searchbar.component';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class] ="homepage">
      agents works!
      <div *ngFor="let agents of agents">
        <!-- {{ agent.name }} -->
      </div>
    </div>
  `,
  styleUrls: [`../../../homepage/homepage.component.css`]
})
export class AgentsComponent {
  homepage = 'homepage';
  agents = []

  constructor(private apiService : ApiService, private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.getAgents();
  }

  getAgents(): void {
    this.apiService.getAgents().subscribe({
      next: (data: any) => {
        this.agents = data;
        this.cd.detectChanges();
        console.log('Agents:', this.agents);
      }, 
      error: () => {
        console.error('Error fetching servants');
      }
    });
  }
}
