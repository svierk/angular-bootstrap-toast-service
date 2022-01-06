import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface ToastEvent {
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastEvents: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
  }

  showSuccessToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: 'success',
    });
  }

  showInfoToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: 'info',
    });
  }

  showWarningToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: 'warning',
    });
  }

  showErrorToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: 'error',
    });
  }
}
