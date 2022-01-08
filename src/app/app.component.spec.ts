import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ToasterComponent } from './components/toaster/toaster.component';
import { EventTypes } from './models/event-types';

describe('AppComponent', () => {
  let app: AppComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, ToasterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-bootstrap-toast-service'`, () => {
    expect(app.title).toEqual('angular-bootstrap-toast-service');
  });

  it('should render title', () => {
    // when
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // then
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'angular-bootstrap-toast-service is running!'
    );
  });

  it('should show success toast on success button click', () => {
    // given
    spyOn(app, 'showToast').and.callThrough();
    const button = debugElement.nativeElement.querySelector('button[class~="success"]');

    // when
    button.click();
    fixture.detectChanges();

    // then
    expect(app.showToast).toHaveBeenCalledWith(EventTypes.Success);
  });

  it('should show info toast on info button click', () => {
    // given
    spyOn(app, 'showToast').and.callThrough();
    const button = debugElement.nativeElement.querySelector('button[class~="info"]');

    // when
    button.click();
    fixture.detectChanges();

    // then
    expect(app.showToast).toHaveBeenCalledWith(EventTypes.Info);
  });

  it('should show warning toast on warning button click', () => {
    // given
    spyOn(app, 'showToast').and.callThrough();
    const button = debugElement.nativeElement.querySelector('button[class~="warning"]');

    // when
    button.click();
    fixture.detectChanges();

    // then
    expect(app.showToast).toHaveBeenCalledWith(EventTypes.Warning);
  });

  it('should show error toast on error button click', () => {
    // given
    spyOn(app, 'showToast').and.callThrough();
    const button = debugElement.nativeElement.querySelector('button[class~="error"]');

    // when
    button.click();
    fixture.detectChanges();

    // then
    expect(app.showToast).toHaveBeenCalledWith(EventTypes.Error);
  });
});
