import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LocalStorageService {
  public setItem<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting item in localStorage: ${error}`);
    }
  }

  public getItem<T>(key: string): T | null {
    const value = localStorage.getItem(key);

    if (!value) return null;

    try {
      return JSON.parse(value) as T;
    } catch (error) {
      console.error(
        `Error parsing JSON from localStorage for key ${key}: ${error}`,
      );
      return null;
    }
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
