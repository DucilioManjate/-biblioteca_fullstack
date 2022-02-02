package com.example.biblioteca.auth.repository;

import com.example.biblioteca.auth.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Usuario findByUsername(String username);
<<<<<<< HEAD
=======

>>>>>>> 1bdfb375e005693eeefbe9c65207c62963ff4e73
}
