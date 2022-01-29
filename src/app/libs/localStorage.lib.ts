import { Injectable } from '@angular/core';
import { ISerialize } from '../interfaces/serialize.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageLib {

  public setStorage(key: string, value: ISerialize | ISerialize[]): void {
    try {
      if (!value || !key) {
        throw new Error('No permission save value or key nullable');
      }

      let savedValue = Array.isArray(value)
        ? value.map(item => item.serialize())
        : value.serialize();

      window.localStorage.setItem(key, JSON.stringify(savedValue));
    } catch (e) {
      console.error('Permission denied for register in localstorage', key, value, e);
    }
  }

  public getStorage(key: string): any {
    try {
      //@ts-ignore
      return JSON.parse(window.localStorage.getItem(key));
    } catch (e) {
      console.error('Permission denied for searching in localstorage', key, e);
    }
  }
}
