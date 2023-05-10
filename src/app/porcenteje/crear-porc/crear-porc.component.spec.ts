import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPorcComponent } from './crear-porc.component';

describe('CrearPorcComponent', () => {
  let component: CrearPorcComponent;
  let fixture: ComponentFixture<CrearPorcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPorcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPorcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
