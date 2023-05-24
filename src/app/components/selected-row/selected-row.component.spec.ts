import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRowComponent } from './selected-row.component';

describe('SelectedRowComponent', () => {
  let component: SelectedRowComponent;
  let fixture: ComponentFixture<SelectedRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
