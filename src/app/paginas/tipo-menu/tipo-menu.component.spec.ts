import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMenuComponent } from './tipo-menu.component';

describe('TipoMenuComponent', () => {
  let component: TipoMenuComponent;
  let fixture: ComponentFixture<TipoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
