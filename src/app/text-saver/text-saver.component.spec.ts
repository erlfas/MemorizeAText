import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSaverComponent } from './text-saver.component';

describe('TextSaverComponent', () => {
  let component: TextSaverComponent;
  let fixture: ComponentFixture<TextSaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
