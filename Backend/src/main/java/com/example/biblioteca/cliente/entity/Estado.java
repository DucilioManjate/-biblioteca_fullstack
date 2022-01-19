package com.example.biblioteca.cliente.entity;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


@Entity
@Getter
@Setter
@Table(name = "estados")
public class Estado {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String uf;
}
