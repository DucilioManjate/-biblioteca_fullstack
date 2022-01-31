package com.example.biblioteca.livro.repository;

import com.example.biblioteca.livro.entity.AreaConhecimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AreaConhecimentoRepository extends JpaRepository<AreaConhecimento, Integer> {
}
