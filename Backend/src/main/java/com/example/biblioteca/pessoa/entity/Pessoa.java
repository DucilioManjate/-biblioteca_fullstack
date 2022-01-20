package com.example.biblioteca.pessoa.entity;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "pessoas")
@Inheritance(strategy = InheritanceType.JOINED)
public  abstract class Pessoa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Integer id;

    @Column(nullable = false)
    private String nomeCompleto;

    @Column
    private String telefone;

    @Column
    private String email;

    @Column
    private String cpf;

    public void setCpf(String cpf) {
        this.cpf = cpf.replaceAll("\\D", "");
    }
}
