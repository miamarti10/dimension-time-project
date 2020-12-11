import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTasksComponent } from './global-tasks.component';

describe('GlobalTasksComponent', () => {
  let component: GlobalTasksComponent;
  let fixture: ComponentFixture<GlobalTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
