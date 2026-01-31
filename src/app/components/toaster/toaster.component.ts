import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ToastEvent } from 'src/app/models/toast-event';
import { ToastService } from 'src/app/services/toast.service';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ToastComponent],
})
export class ToasterComponent implements OnInit {
  readonly toastService = inject(ToastService);
  readonly cdr = inject(ChangeDetectorRef);

  currentToasts: ToastEvent[] = [];

  constructor() {}

  ngOnInit() {
    this.subscribeToToasts();
  }

  subscribeToToasts() {
    this.toastService.toastEvents.subscribe((toasts) => {
      const currentToast: ToastEvent = {
        type: toasts.type,
        title: toasts.title,
        message: toasts.message,
      };
      this.currentToasts.push(currentToast);
      this.cdr.detectChanges();
    });
  }

  dispose(index: number) {
    this.currentToasts.splice(index, 1);
    this.cdr.detectChanges();
  }
}
