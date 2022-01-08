import { EventTypes } from './event-types';

export interface Toast {
  type: EventTypes;
  title: string;
  message: string;
}
