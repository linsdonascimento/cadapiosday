import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBebidasPage } from './lista-bebidas.page';

describe('ListaBebidasPage', () => {
  let component: ListaBebidasPage;
  let fixture: ComponentFixture<ListaBebidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBebidasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBebidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
