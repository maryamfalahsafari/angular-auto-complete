import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWithScrollComponent } from './test-with-scroll.component';

describe('TestWithScrollComponent', () => {
  let component: TestWithScrollComponent;
  let fixture: ComponentFixture<TestWithScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWithScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWithScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
