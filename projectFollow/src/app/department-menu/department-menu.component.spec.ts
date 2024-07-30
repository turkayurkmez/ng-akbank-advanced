import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentMenuComponent } from './department-menu.component';

describe('DepartmentMenuComponent', () => {
  let component: DepartmentMenuComponent;
  let fixture: ComponentFixture<DepartmentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartmentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
