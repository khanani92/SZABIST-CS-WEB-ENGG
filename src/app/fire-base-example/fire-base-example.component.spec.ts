import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireBaseExampleComponent } from './fire-base-example.component';

describe('FireBaseExampleComponent', () => {
  let component: FireBaseExampleComponent;
  let fixture: ComponentFixture<FireBaseExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireBaseExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireBaseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
