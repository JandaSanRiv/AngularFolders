import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPostsComponent } from './listado-posts.component';

describe('ListadoPostsComponent', () => {
  let component: ListadoPostsComponent;
  let fixture: ComponentFixture<ListadoPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
