import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastModel } from '../../models/toast.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  #messages: ToastModel[] = [];

  $toastData = new BehaviorSubject<ToastModel[]>([]);

  public getMessage = (): Observable<ToastModel[]> => this.$toastData?.asObservable();

  public setMessage(message: ToastModel): void {
    this.#messages.push(message);
    this.$toastData.next(this.#messages);
  }
}
