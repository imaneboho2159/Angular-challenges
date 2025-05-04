import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USERComponent } from './user.component';

describe('USERComponent', () => {
  let component: USERComponent;
  let fixture: ComponentFixture<USERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [USERComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(USERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
