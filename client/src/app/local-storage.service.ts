import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  // Set a value in local storage
  setItem(key: string, value: string): void {
    if (this.isLocalStorageAvailable()) {
      console.log(this.isLocalStorageAvailable());
      localStorage.setItem(key, value);
    } else {
      console.warn('localStorage is not available');
    }
  }

  // Get a value from local storage
  getItem(key: string): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem(key);
    } else {
      console.warn('localStorage is not available');
      return null;
    }
  }

  // Remove a value from local storage
  removeItem(key: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(key);
    } else {
      console.warn('localStorage is not available');
    }
  }

  // Clear all items from local storage
  clear(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.clear();
    } else {
      console.warn('localStorage is not available');
    }
  }
}