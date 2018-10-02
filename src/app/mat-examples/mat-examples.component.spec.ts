import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExamplesComponent } from './mat-examples.component';

describe('MatExamplesComponent', () => {
  let component: MatExamplesComponent;
  let fixture: ComponentFixture<MatExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
