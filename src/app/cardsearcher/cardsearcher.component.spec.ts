import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsearcherComponent } from './cardsearcher.component';

describe('CardsearcherComponent', () => {
  let component: CardsearcherComponent;
  let fixture: ComponentFixture<CardsearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsearcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
