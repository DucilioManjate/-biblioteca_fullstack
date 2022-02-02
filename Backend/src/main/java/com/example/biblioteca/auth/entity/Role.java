package com.example.biblioteca.auth.entity;

<<<<<<< HEAD
public enum Role {
    BIBLIOTECARIO,
    GESTOR,
    RECEPCIONISTA
}

=======
import lombok.*;

import javax.persistence.*;

import static javax.persistence.GenerationType.AUTO;

@Entity
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String RoleName;
}
>>>>>>> 1bdfb375e005693eeefbe9c65207c62963ff4e73
