import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfOptComponent } from './of-opt.component';

describe('OfOptComponent', () => {
  let component: OfOptComponent;
  let fixture: ComponentFixture<OfOptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfOptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
