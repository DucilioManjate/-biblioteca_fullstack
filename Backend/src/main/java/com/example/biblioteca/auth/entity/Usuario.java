package com.example.biblioteca.auth.entity;

import com.example.biblioteca.pessoa.entity.Pessoa;
import lombok.*;

import javax.persistence.*;


@Entity
@Getter
@Setter
public class Usuario extends Pessoa {

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String senha;
    @Column
    private String role;


}
