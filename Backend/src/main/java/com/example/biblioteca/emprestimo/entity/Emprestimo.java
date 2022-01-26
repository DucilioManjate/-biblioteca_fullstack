package com.example.biblioteca.emprestimo.entity;

import com.example.biblioteca.cliente.entity.Cliente;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@RequiredArgsConstructor
@Getter
@Setter
@Table(name="emprestimos")
public class Emprestimo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private EmprestimoStatus status;

    private String dataEmprestimo;
    private String dataDevolucao;
    private BigDecimal valor;
    private BigDecimal multa;

    @ManyToOne
    private Exemplar exemplar;

    @ManyToOne
    private Cliente cliente;


}
