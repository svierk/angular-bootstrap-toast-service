import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventTypes } from 'src/app/models/event-types';
import { ToasterComponent } from './toaster.component';

describe('ToasterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToasterComponent],
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
});
