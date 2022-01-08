import { Component } from '@angular/core';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-bootstrap-toast-service';

  constructor(private toastService: ToastService) {}

  showToast() {
    this.toastService.showSuccessToast('Hello', 'World');
  }
}
