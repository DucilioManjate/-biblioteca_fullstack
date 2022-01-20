package com.example.biblioteca.endereco.dto;

import com.example.biblioteca.endereco.entity.Cidade;
import com.example.biblioteca.endereco.entity.Endereco;
import com.example.biblioteca.endereco.entity.Estado;
import com.example.biblioteca.endereco.entity.TipoEndereco;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EnderecoResponse {

    private Integer id;
    private Integer numero;
    private String cep;
    private TipoEndereco tipo;
    private String bairro;
    private String logradouro;
    private String complemento;
    private String viacepUrl;
    private Cidade cidade;
    private Estado estado;
    private Integer clienteId;

    public EnderecoResponse(Endereco endereco) {
        this.id = endereco.getId();
        this.numero = endereco.getNumero();
        this.cep = endereco.getCep();
        this.tipo = endereco.getTipo();
        this.bairro = endereco.getBairro();
        this.logradouro = endereco.getLogradouro();
        this.complemento = endereco.getComplemento();
        this.viacepUrl = endereco.getViacepUrl();
        this.cidade = endereco.getCidade();
        this.estado = endereco.getCidade().getEstado();
        this.clienteId = endereco.getCliente().getId();
    }
}
