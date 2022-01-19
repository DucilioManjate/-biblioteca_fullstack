package com.example.biblioteca.cliente;

import com.example.biblioteca.cliente.entity.Cliente;
import com.example.biblioteca.cliente.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService{

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente create(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public List<Cliente> index() {
        return clienteRepository.findAll();
    }
}
