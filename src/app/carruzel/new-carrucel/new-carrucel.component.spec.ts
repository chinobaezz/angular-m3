import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarrucelComponent } from './new-carrucel.component';

describe('NewCarrucelComponent', () => {
  let component: NewCarrucelComponent;
  let fixture: ComponentFixture<NewCarrucelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCarrucelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCarrucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
