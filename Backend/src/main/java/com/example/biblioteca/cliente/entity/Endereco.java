package com.example.biblioteca.cliente.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer numero;
    private String cep;
    private TipoEndereco tipo;
    private String bairro;
    private String logradouro;
    private String complemento;
    private String viacepUrl;

    @ManyToOne
    @JoinColumn(name = "cidade_id", nullable = false)
    private Cidade cidade;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cliente_id", nullable = false)
    private Cliente cliente;

}
