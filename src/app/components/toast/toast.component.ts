import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
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
    this.toastService.getMessage().subscribe((messages: ToastModel[]) => {
    });
  }
}
