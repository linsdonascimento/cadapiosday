import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClientePage } from './listar-cliente.page';

describe('ListarClientePage', () => {
  let component: ListarClientePage;
  let fixture: ComponentFixture<ListarClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
