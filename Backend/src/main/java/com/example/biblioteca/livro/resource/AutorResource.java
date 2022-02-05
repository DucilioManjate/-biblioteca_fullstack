package com.example.biblioteca.livro.resource;

import com.example.biblioteca.livro.AutorService;

import com.example.biblioteca.livro.entity.Autor;


import com.example.biblioteca.livro.entity.Categoria;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/autores")
@CrossOrigin
public class AutorResource {

    private final AutorService autorService;

    @GetMapping
    public ResponseEntity<List<Autor>> listar(){
        return ResponseEntity.ok(autorService.listarAutor());
    }


    @PostMapping
    public ResponseEntity<Autor> criar(@RequestBody Autor autor){
        return ResponseEntity.status(HttpStatus.CREATED).body(autorService.criarAutor(autor));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Autor> consulta(@PathVariable(name = "id") Integer id) {
        return ResponseEntity.ok((autorService.consultar(id)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Autor>update(@Valid @RequestBody Autor autor) throws Exception {
        return ResponseEntity.ok(autorService.atualizar(autor));
  }

    @DeleteMapping("/{id}")
    public ResponseEntity remover(@PathVariable Integer id) throws Exception {
        autorService.remover(id);
        return ResponseEntity.noContent().build();
    }

////    @DeleteMapping("/{id}")
////    public ResponseEntity<Void> apagar(@PathVariable(name = "id") Integer id) {
////        autorService.remover(id);
////        return ResponseEntity.noContent().build();
//    }
}
