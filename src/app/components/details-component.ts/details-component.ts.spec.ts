import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponentTs } from './details-component.ts';

describe('DetailsComponentTs', () => {
  let component: DetailsComponentTs;
  let fixture: ComponentFixture<DetailsComponentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponentTs],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponentTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
