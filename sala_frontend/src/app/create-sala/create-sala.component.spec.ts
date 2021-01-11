import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalaComponent } from './create-sala.component';

describe('CriarSalaComponent', () => {
  let component: CreateSalaComponent;
  let fixture: ComponentFixture<CreateSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
