import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCotacaoComponent } from './cadastrar-cotacao.component';

describe('CadastrarCotacaoComponent', () => {
  let component: CadastrarCotacaoComponent;
  let fixture: ComponentFixture<CadastrarCotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
