import { Injectable } from '@angular/core';
import { Games } from '../shared/models/games';
import { games } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getAllGames():Games[] {
    return games;
  }
}
