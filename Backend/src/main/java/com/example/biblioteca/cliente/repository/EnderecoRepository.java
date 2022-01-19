package com.example.biblioteca.cliente.repository;

import com.example.biblioteca.cliente.entity.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnderecoRepository extends JpaRepository<Endereco, Integer> {
}
