import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSalaComponent } from './details-sala.component';

describe('DetailsSalaComponent', () => {
  let component: DetailsSalaComponent;
  let fixture: ComponentFixture<DetailsSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
