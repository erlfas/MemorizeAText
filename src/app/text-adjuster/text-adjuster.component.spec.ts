import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAdjusterComponent } from './text-adjuster.component';

describe('TextAdjusterComponent', () => {
  let component: TextAdjusterComponent;
  let fixture: ComponentFixture<TextAdjusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAdjusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAdjusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
