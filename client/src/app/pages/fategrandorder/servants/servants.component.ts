import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../../../local-storage.service';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from '../../../navbar/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-servants',
  standalone: true,
  imports: [CommonModule, SearchbarComponent],
  template: `
    <div [class]="homepage">
      <div *ngIf="personalisedServant===''">
        <h1>Servants</h1>
        <div [class]="row">
          <span *ngFor="let servant of servantIcons" [class]="filter" (click)="filterByClass(servant.title)">
            <img *ngIf="servantFilterClassMap[servant.title]" [alt]="servant.name" [title]="servant.title" [src]="servant.image2" width="37" height="37">
            <img *ngIf="!servantFilterClassMap[servant.title]" [alt]="servant.name" [title]="servant.title" [src]="servant.image" width="37" height="37">
          </span>
        </div>
        <app-searchbar (searchTermChanged)="onSearch($event)"></app-searchbar>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Image</th>
              <th>Name</th>
              <th>Rarity</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!servants || !servants.length">
              <td colspan="4">Loading...</td>
            </tr>
            <tr *ngFor="let servant of filteredServants; trackBy: trackByServant" >
              <td>{{servant.class}}</td>
              <td (click)="getPersonalisedServant(servant.name)">
                <img src="{{ servant.image }}" height = 222px width =130px>
              </td>
              <td>
                {{ servant.name }} 
              </td>
              <td>
                {{ servant.rarity }} 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div *ngIf="personalisedServant!=''">
        <div>
          personalised servant: {{ personalisedServant }}
        </div>
        <button (click)="getPersonalisedServant('')">Back</button>
      </div>
    </div>
  `,
  styleUrls: ['./servants.component.css', '../fategrandorderhomepage/fategrandorderhomepage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServantsComponent {
  filter = 'filter';
  row = 'row';
  homepage = 'homepage';
  servants: any[] = [];
  filteredServants: any[] = [];
  servantBox = 'servantBox';
  personalisedServant = '';
  searchTerm = '';

  servantFilterClassMap : { [key : string]: boolean } = {
    "All" : true,
    "Saber" : false,
    "Archer" : false,
    "Lancer" : false,
    "Rider" : false,
    "Caster" : false,
    "Assassin" : false,
    "Berserker" : false,
    "Ruler" : false,
    "Avenger" : false,
    "Moon Cancer" : false,
    "Alter Ego" : false,
    "Foreigner" : false,
    "Pretender" : false,
    "Unknown" : false
  };

  servantFilterRarityMap: { [key: number]: boolean } = {
    0 : true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  };
  
  trackByServant(index: number, servant: any): string {
    return servant.name;
  }

  getPersonalisedServant(servant: string): void {
    console.log('Personalised servant:', servant);
    this.personalisedServant = servant;
  }

  // add personalised servants 
  constructor(private router: Router, private dataService : DataService, private localStorageService : LocalStorageService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getServants();
  }

  getServants(): void {
    this.dataService.getData('http://localhost:3000/api/gachatracker/fgo/servants/get/all')
      .subscribe((data: any) => {
        this.servants = data;
        this.getFilteredServants(this.searchTerm);
        this.cd.detectChanges();
        console.log('Servants:', this.servants);
      }, (error) => {
        console.error('Error fetching servants:', error);
      });
  }

  getFilteredServants(searchTerm: string) : void {
    this.filteredServants = [];
    this.servants.forEach((servant: any) => {
      const { class: servantClass, rarity } = servant;
      const class_filter = (this.servantFilterClassMap["All"] && this.servantFilterRarityMap[0]) || 
                          (this.servantFilterClassMap["All"] && this.servantFilterRarityMap[rarity]) || 
                          (this.servantFilterClassMap[servantClass] && this.servantFilterRarityMap[0]) ||
                          (this.servantFilterClassMap[servantClass] && this.servantFilterRarityMap[rarity]);

      const search_filter = servant.name.toLowerCase().includes(searchTerm.toLowerCase())

      console.log(servant.name, searchTerm, class_filter, search_filter);
      
      if (class_filter && search_filter) {
        this.filteredServants.push(servant);
      }
    });
    console.log('Filtered Servants', this.filteredServants);
  }

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.getFilteredServants(searchTerm);
    console.log('Search Term:', searchTerm);
  }

  filterByClass(servantClass : string) {
    this.servantFilterClassMap[servantClass] = !this.servantFilterClassMap[servantClass];
    this.checkFilteredServants();
    console.log("serachterm", this.searchTerm);
    this.getFilteredServants(this.searchTerm);
  }

  checkFilteredServants() {
    const anyOtherFilterActive = Object.entries(this.servantFilterClassMap).some(([key, value]) => key !== "All" && value);
    this.servantFilterClassMap["All"] = !anyOtherFilterActive;
  }

  servantIcons = [
    { name: "saber class icon", title: "Saber", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_1.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_1.png"},
    { name: "archer class icon", title: "Archer", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_2.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_2.png" },
    { name: "lancer class icon", title: "Lancer", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_3.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_3.png" },
    { name: "rider class icon", title: "Rider", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_4.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_4.png" },
    { name: "caster class icon", title: "Caster", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_5.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_5.png" },
    { name: "assassin class icon", title: "Assassin", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_6.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_6.png" },
    { name: "berserker class icon", title: "Berserker", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_7.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_7.png" },
    { name: "ruler class icon", title: "Ruler", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_9.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_9.png" },
    { name: "avenger class icon", title: "Avenger", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_11.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_11.png" },
    { name: "moonCancer class icon", title: "Moon Cancer", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_23.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_23.png" },
    { name: "alterEgo class icon", title: "Alter Ego", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_10.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_10.png" },
    { name: "foreigner class icon", title: "Foreigner", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_25.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_25.png" },
    { name: "pretender class icon", title: "Pretender", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_28.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_28.png" },
    { name: "unknown class icon", title: "Unknown", image: "https://static.atlasacademy.io/JP/ClassIcons/class2_97.png", image2: "https://static.atlasacademy.io/JP/ClassIcons/class3_97.png" }
  ];
}
