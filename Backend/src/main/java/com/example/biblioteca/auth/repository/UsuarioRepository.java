package com.example.biblioteca.auth.repository;

import com.example.biblioteca.auth.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
