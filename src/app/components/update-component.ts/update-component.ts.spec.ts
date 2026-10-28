import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateComponentTs } from './update-component.ts';

describe('UpdateComponentTs', () => {
  let component: UpdateComponentTs;
  let fixture: ComponentFixture<UpdateComponentTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateComponentTs],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateComponentTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
