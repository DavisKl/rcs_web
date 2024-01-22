import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalvenaComponent } from './galvena.component';

describe('GalvenaComponent', () => {
  let component: GalvenaComponent;
  let fixture: ComponentFixture<GalvenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalvenaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalvenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
