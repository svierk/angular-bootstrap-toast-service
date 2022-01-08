import { EventTypes } from './event-types';

export interface ToastEvent {
  type: EventTypes;
  title: string;
  message: string;
}
