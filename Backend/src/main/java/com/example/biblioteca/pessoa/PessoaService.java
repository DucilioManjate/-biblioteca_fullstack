package com.example.biblioteca.pessoa;

import com.example.biblioteca.pessoa.entity.Pessoa;


import java.util.List;


public interface PessoaService{
    Pessoa create(Pessoa pessoa);
    List<Pessoa> index();
}
