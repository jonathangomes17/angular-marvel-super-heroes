import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastModel } from '../../models/toast.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  $toastData = new Subject<ToastModel>();

  public getMessage = (): Observable<ToastModel> => this.$toastData.asObservable();

  public setMessage(message: ToastModel): void {
    this.$toastData.next(message);
  }
}
