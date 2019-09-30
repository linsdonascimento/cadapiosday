import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcaoPage } from './opcao.page';

describe('OpcaoPage', () => {
  let component: OpcaoPage;
  let fixture: ComponentFixture<OpcaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
