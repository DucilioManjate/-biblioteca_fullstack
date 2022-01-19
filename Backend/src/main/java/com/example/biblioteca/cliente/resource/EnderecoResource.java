package com.example.biblioteca.cliente.resource;

import com.example.biblioteca.cliente.ClienteService;
import com.example.biblioteca.cliente.EnderecoService;
import com.example.biblioteca.cliente.entity.Cliente;
import com.example.biblioteca.cliente.entity.Endereco;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enderecos")
public class EnderecoResource {
    @Autowired
    private EnderecoService service;

    @PostMapping
    public ResponseEntity<Endereco> create(@RequestBody Endereco endereco){
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(endereco));
    }

    @GetMapping
    public ResponseEntity <List<Endereco>> listAll (){
        return ResponseEntity.status(HttpStatus.OK).body(service.index());
    }
}
