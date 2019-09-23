import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPratoPage } from './lista-prato.page';

describe('ListaPratoPage', () => {
  let component: ListaPratoPage;
  let fixture: ComponentFixture<ListaPratoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPratoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPratoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
