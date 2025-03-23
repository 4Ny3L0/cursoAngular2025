import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsMenuOptionComponent } from './gifs-menu-option.component';

describe('GifsMenuOptionComponent', () => {
  let component: GifsMenuOptionComponent;
  let fixture: ComponentFixture<GifsMenuOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsMenuOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsMenuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
