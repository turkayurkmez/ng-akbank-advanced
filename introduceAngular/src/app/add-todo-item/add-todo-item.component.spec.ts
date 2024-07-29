import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoItemComponent } from './add-todo-item.component';

describe('AddTodoItemComponent', () => {
  let component: AddTodoItemComponent;
  let fixture: ComponentFixture<AddTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTodoItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
