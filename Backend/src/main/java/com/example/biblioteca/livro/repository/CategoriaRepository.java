package com.example.biblioteca.livro.repository;

import com.example.biblioteca.livro.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
}
