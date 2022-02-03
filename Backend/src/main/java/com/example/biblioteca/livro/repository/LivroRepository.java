package com.example.biblioteca.livro.repository;

import com.example.biblioteca.livro.entity.Livro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Integer> {
    @Query(value = "select l from Livro l left join l.areaConhecimentos ac left join l.autores a")
    List<Livro> findAllLivros();
}
