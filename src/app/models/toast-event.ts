export interface ToastEvent {
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}
