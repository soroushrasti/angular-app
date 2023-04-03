import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieEditeComponent } from './recepie-edite.component';

describe('RecepieEditeComponent', () => {
  let component: RecepieEditeComponent;
  let fixture: ComponentFixture<RecepieEditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepieEditeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepieEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
