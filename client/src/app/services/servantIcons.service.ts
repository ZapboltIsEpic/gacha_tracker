import { Injectable } from '@angular/core';
import { ServantIcons } from '../shared/models/servantIcons';
import { servantIcons } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class ServantIconsService {

  constructor() { }

  getAllServantIcons():ServantIcons[] {
    return servantIcons;
  }
}
