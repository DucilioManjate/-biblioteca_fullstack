package com.example.biblioteca.emprestimo.entity;

import com.example.biblioteca.livro.entity.Livro;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@RequiredArgsConstructor
@Getter
@Setter
@Table(name="exemplares")
public class Exemplar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String Status;

    @Column
    private String codigo;

    @ManyToOne
    private Livro livro;

}
