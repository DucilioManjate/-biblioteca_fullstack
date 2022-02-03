package com.example.biblioteca.livro.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name="areas_conhecimento")
public class AreaConhecimento {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;

        @Column(nullable = false)
        private String nome;

        @ManyToMany(mappedBy = "areaConhecimentos")
        private List<Livro> books = new ArrayList<>();

}
