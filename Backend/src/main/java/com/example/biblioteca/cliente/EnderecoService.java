package com.example.biblioteca.cliente;

import com.example.biblioteca.cliente.entity.Cliente;
import com.example.biblioteca.cliente.entity.Endereco;
import com.example.biblioteca.cliente.repository.ClienteRepository;
import com.example.biblioteca.cliente.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnderecoService {
    @Autowired
    private EnderecoRepository repository;

    public Endereco create(Endereco endereco) {
        return repository.save(endereco);
    }

    public List<Endereco> index() {
        return repository.findAll();
    }
}
