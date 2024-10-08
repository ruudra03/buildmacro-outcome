import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderDetailsComponent } from './builder-details.component';

describe('BuilderDetailsComponent', () => {
  let component: BuilderDetailsComponent;
  let fixture: ComponentFixture<BuilderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
