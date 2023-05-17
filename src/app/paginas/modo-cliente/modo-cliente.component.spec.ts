import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoClienteComponent } from './modo-cliente.component';

describe('ModoClienteComponent', () => {
  let component: ModoClienteComponent;
  let fixture: ComponentFixture<ModoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
