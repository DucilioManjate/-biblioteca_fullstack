package com.example.biblioteca.cliente.repository;

import com.example.biblioteca.cliente.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    //padronizacao que o jpa utliza e implementa
    Optional<Cliente> findClienteByCpf(String cpf);


    @Query(value = "SELECT * FROM Task WHERE cpf = ?1", nativeQuery = true)
    List<Cliente> findName(String cpf);


}
