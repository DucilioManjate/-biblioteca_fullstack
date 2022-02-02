package com.example.biblioteca.auth.entity;

import com.example.biblioteca.pessoa.entity.Pessoa;
import lombok.*;

import javax.persistence.*;
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

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String senha;
<<<<<<< HEAD
=======

    @ManyToMany(fetch = EAGER)
    private Collection<Role> roles = new ArrayList<>();

>>>>>>> 1bdfb375e005693eeefbe9c65207c62963ff4e73

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;
}
