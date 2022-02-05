package com.example.biblioteca.auth.entity;

import com.example.biblioteca.pessoa.entity.Pessoa;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Collection;

import static javax.persistence.FetchType.EAGER;
import static javax.persistence.GenerationType.AUTO;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario extends Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "UserName is mandatory")
    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String senha;


    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;
}
