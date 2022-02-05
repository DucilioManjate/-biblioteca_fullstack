package com.example.biblioteca.emprestimo.entity;

import com.example.biblioteca.cliente.entity.Cliente;
import com.example.biblioteca.livro.entity.Livro;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

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

    @Column(nullable = false, updatable = false)
    private LocalDateTime dataEmprestimo;

    @Column(nullable = false, updatable = false)
    private LocalDateTime  dataDevolucao;

    @Column(nullable = false)
    private BigDecimal valor;

    @Column(nullable = false)
    private BigDecimal multa;

    @ManyToOne
    @JoinColumn(name="exemplar_id", nullable = false)
    private Exemplar exemplar;

    @ManyToOne
    @JoinColumn(name="cliente_id", nullable = false)
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name="livro_id", nullable = false)
    private Livro livro;

}
