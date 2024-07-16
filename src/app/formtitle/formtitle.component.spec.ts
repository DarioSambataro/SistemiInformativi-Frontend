import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtitleComponent } from './formtitle.component';

describe('FormtitleComponent', () => {
  let component: FormtitleComponent;
  let fixture: ComponentFixture<FormtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormtitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
