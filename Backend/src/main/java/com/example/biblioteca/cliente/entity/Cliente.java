package com.example.biblioteca.cliente.entity;

import com.example.biblioteca.cliente.entity.Endereco;
import com.example.biblioteca.pessoa.entity.Pessoa;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Cliente extends Pessoa {

    @Column
    private String documento;

    @OneToMany(mappedBy = "cliente",cascade= CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Endereco> enderecos = new ArrayList<>();
}
