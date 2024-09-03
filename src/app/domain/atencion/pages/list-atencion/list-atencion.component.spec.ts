import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAtencionComponent } from './list-atencion.component';

describe('ListAtencionComponent', () => {
  let component: ListAtencionComponent;
  let fixture: ComponentFixture<ListAtencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAtencionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
