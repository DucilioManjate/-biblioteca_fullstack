package com.example.biblioteca.cliente.repository;

import com.example.biblioteca.cliente.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    //padronizacao que o jpa utliza e implementa
    Optional<Cliente> findClienteByCpf(String cpf);
}
