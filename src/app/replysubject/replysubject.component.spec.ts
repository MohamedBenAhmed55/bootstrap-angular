import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplysubjectComponent } from './replysubject.component';

describe('ReplysubjectComponent', () => {
  let component: ReplysubjectComponent;
  let fixture: ComponentFixture<ReplysubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReplysubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplysubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
