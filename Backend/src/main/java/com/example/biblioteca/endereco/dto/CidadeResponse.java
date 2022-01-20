package com.example.biblioteca.endereco.dto;

import com.example.biblioteca.endereco.entity.Cidade;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CidadeResponse {

    private Integer id;
    private String nome;
    private String estado;

    public CidadeResponse(Cidade cidade) {
        this.id = cidade.getId();
        this.nome = cidade.getNome();
        this.estado = cidade.getEstado().getUf();
    }
}
