import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizacoesPesquisaComponent } from './utilizacoes-pesquisa.component';

describe('UtilizacoesPesquisaComponent', () => {
  let component: UtilizacoesPesquisaComponent;
  let fixture: ComponentFixture<UtilizacoesPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilizacoesPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizacoesPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
