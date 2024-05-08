import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSkillComponent } from './carousel-skill.component';

describe('CarouselSkillComponent', () => {
  let component: CarouselSkillComponent;
  let fixture: ComponentFixture<CarouselSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselSkillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
