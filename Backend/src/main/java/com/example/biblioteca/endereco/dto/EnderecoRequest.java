package com.example.biblioteca.endereco.dto;

import com.example.biblioteca.cliente.entity.Cliente;
import com.example.biblioteca.endereco.entity.Cidade;
import com.example.biblioteca.endereco.entity.Endereco;
import com.example.biblioteca.endereco.entity.TipoEndereco;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EnderecoRequest {

    private Integer numero;
    private String cep;
    private TipoEndereco tipo;
    private String bairro;
    private String logradouro;
    private String complemento;
    private String viacepUrl;
    private Integer cidadeId;
    private Integer clienteId;

    public Endereco toModel(){
        return Endereco.builder()
                .tipo(tipo)
                .numero(numero)
                .cep(cep)
                .bairro(bairro)
                .logradouro(logradouro)
                .complemento(complemento)
                .viacepUrl(viacepUrl)
                .cidade(new Cidade(cidadeId))
                .cliente(new Cliente(clienteId))
                .build();
    }

}
