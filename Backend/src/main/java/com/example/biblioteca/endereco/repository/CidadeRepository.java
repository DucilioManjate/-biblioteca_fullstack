package com.example.biblioteca.endereco.repository;

import com.example.biblioteca.endereco.entity.Cidade;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CidadeRepository extends JpaRepository<Cidade, Integer>{
    List<Cidade> findAllByEstado_Id(Integer id);
    List<Cidade> findAllByEstado_Uf(String uf);
}
