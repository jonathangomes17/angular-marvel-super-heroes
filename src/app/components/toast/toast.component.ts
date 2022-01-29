import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { timer } from 'rxjs';
import { ToastModel } from 'src/app/models/toast.model';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent implements AfterViewInit {

  messages: ToastModel[] = [];

  constructor(private toastService: ToastService, private cdref: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.toastService
      .getMessage()
      .subscribe((message: ToastModel) => this.onClose(message));
  }

  onClose(messageRequester: ToastModel): void {
    timer(messageRequester.timeLife).subscribe(() => {
      this.messages = this.messages.filter(message => message.id !== messageRequester.id);
      this.cdref.detectChanges();
    });
  }
}
