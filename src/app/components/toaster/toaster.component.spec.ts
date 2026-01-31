import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { EventTypes } from 'src/app/models/event-types';
import { ToastEvent } from 'src/app/models/toast-event';
import { ToastService } from 'src/app/services/toast.service';
import { ToasterComponent } from './toaster.component';

describe('ToasterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;
  let toastEventsSubject: Subject<ToastEvent>;

  beforeEach(async () => {
    // create subject for observable
    toastEventsSubject = new Subject<ToastEvent>();

    // create toast service mock
    const toastServiceSpy = jasmine.createSpyObj('ToastService', [], {
      toastEvents: toastEventsSubject.asObservable(),
    });

    await TestBed.configureTestingModule({
      imports: [ToasterComponent],
      providers: [{ provide: ToastService, useValue: toastServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should remove toasts on dispose', () => {
    // given
    component.currentToasts = [
      {
        type: EventTypes.Info,
        title: 'info',
        message: 'info',
      },
    ];

    // when
    component.dispose(0);

    // then
    expect(component.currentToasts).toEqual([]);
  });

  it('should add new toast to currentToasts array when event is emitted', () => {
    // given
    component.subscribeToToasts();
    const mockToast: ToastEvent = {
      type: EventTypes.Success,
      title: 'success',
      message: 'success',
    };

    // when
    toastEventsSubject.next(mockToast);

    // then
    expect(component.currentToasts[0]).toEqual(mockToast);
  });
});
