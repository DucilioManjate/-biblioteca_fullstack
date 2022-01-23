package com.example.biblioteca.livro.resource;

import com.example.biblioteca.livro.AutorService;

import com.example.biblioteca.livro.entity.Autor;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/autores")
public class AutorResource {

    private final AutorService autorService;

    @PostMapping
    public ResponseEntity<Autor> criar(@RequestBody Autor autor){
        return ResponseEntity.status(HttpStatus.CREATED).body(autorService.criarAutor(autor));
    }

    @GetMapping
    public ResponseEntity<List<Autor>> listar(){
        return ResponseEntity.ok(autorService.listarCategoria());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Autor> consulta(@PathVariable(name = "id") Integer id) {
        return ResponseEntity.ok((autorService.consultar(id)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagar(@PathVariable(name = "id") Integer id) {
        autorService.remover(id);
        return ResponseEntity.noContent().build();
    }
}
