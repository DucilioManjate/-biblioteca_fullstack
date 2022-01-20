package com.example.biblioteca.auth.resource;

import com.example.biblioteca.auth.UsuarioService;
import com.example.biblioteca.auth.entity.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioResource {
    @Autowired
    private UsuarioService service;

    @PostMapping
    public ResponseEntity<Usuario> create(@RequestBody Usuario usuario){
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(usuario));
    }

    @GetMapping
    public ResponseEntity <List<Usuario>> listAll (){
        return ResponseEntity.status(HttpStatus.OK).body(service.index());
    }

}
