import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractionComponent } from './substraction.component';

describe('SubstractionComponent', () => {
  let component: SubstractionComponent;
  let fixture: ComponentFixture<SubstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubstractionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
