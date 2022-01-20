package com.example.biblioteca.endereco.repository;

import com.example.biblioteca.cliente.entity.Cliente;
import com.example.biblioteca.endereco.entity.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnderecoRepository extends JpaRepository<Endereco, Integer> {
    List<Endereco> findAllByCliente(Cliente cliente);
}
