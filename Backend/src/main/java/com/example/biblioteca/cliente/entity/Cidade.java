package com.example.biblioteca.cliente.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "cidades")
public class Cidade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String nome;

    @ManyToOne
    @JoinColumn(name = "estado_id", nullable = false)
    private Estado estado;
}
