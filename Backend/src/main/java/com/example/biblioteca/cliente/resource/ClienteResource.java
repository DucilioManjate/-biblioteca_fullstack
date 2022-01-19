package com.example.biblioteca.cliente.resource;

import com.example.biblioteca.cliente.ClienteService;
import com.example.biblioteca.cliente.entity.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteResource {

    @Autowired
    private ClienteService service;

    @PostMapping
    public ResponseEntity<Cliente> create(@RequestBody Cliente cliente){
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(cliente));
    }

    @GetMapping
    public ResponseEntity <List<Cliente>> listAll (){
        return ResponseEntity.status(HttpStatus.OK).body(service.index());
    }
}
