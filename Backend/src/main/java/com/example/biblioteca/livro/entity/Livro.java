package com.example.biblioteca.livro.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@RequiredArgsConstructor
@Getter
@Setter
@Table(name = "livros")
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String resumo;

    @Column
    private Integer ano;

    private String edicao;

    @Column
    private String miniatura;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "editora_id")
    private Editora editora;

    //retorna lista de area de conhecimento
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(
            name = "livros_has_areas_conhecimento",
            joinColumns = @JoinColumn(name = "livro_id"), //mapeamendo da lista de area de conhecimentos
            inverseJoinColumns = @JoinColumn(name = "area_conhecimento_id") // referencias da propria classe que é o id
    )
    private List<AreaConhecimento> areaConhecimentos = new ArrayList<>();

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(
            name = "autores_has_livros",
            joinColumns = @JoinColumn(name = "livro_id"), //mapeamendo da lista de autor
            inverseJoinColumns = @JoinColumn(name = "autor_id") // referencias da propria classe que é o id
    )
    private List<Autor> autores = new ArrayList<>();

}
