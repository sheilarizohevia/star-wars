import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStarWarsComponent } from './section-star-wars.component';

describe('SectionStarWarsComponent', () => {
  let component: SectionStarWarsComponent;
  let fixture: ComponentFixture<SectionStarWarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionStarWarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
