import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventTypes } from 'src/app/models/event-types';
import { ToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create an error toast that does not disappear', () => {
    // given
    component.type = EventTypes.Error;
    component.title = 'error';
    component.message = 'error';

    // when
    fixture.detectChanges();
    spyOn(component.toast, 'dispose');

    // then
    expect(component).toBeTruthy();
    expect(component.toast.dispose).not.toHaveBeenCalled();
  });

  it('should emit dispose event on close button click', () => {
    // given
    component.type = EventTypes.Info;
    component.title = 'infp';
    component.message = 'info';
    spyOn(component.disposeEvent, 'emit');
    const button = debugElement.nativeElement.querySelector('button[class="btn-close"]');

    // when
    fixture.detectChanges();
    spyOn(component.toast, 'dispose');
    button.click();
    fixture.detectChanges();

    // then
    expect(component.disposeEvent.emit).toHaveBeenCalledTimes(1);
    expect(component.toast.dispose).toHaveBeenCalledTimes(1);
  });
});
