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

    @Column(nullable = false, updatable = false)
//    @Temporal(TemporalType.DATE)
    @Temporal(TemporalType.TIMESTAMP)
    private String dataEmprestimo;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private String dataDevolucao;

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

}
