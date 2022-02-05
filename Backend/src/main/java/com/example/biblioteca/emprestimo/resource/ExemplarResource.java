package com.example.biblioteca.emprestimo.resource;

import com.example.biblioteca.emprestimo.ExemplarService;
import com.example.biblioteca.emprestimo.entity.Exemplar;

import com.example.biblioteca.livro.entity.Autor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/exemplares")
@CrossOrigin
public class ExemplarResource {

    private final ExemplarService exemplarService;

    @PostMapping
    public ResponseEntity<Exemplar> criar(@RequestBody Exemplar exemplar){
        return ResponseEntity.status(HttpStatus.CREATED).body(exemplarService.cadastrarExemplar(exemplar));
    }
    @GetMapping
    public ResponseEntity<List<Exemplar>> listar(){

        return ResponseEntity.ok(exemplarService.listarExemplar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Exemplar> consulta(@PathVariable(name = "id") Integer id) {
        return ResponseEntity.ok((exemplarService.buscarExemplarPorId(id)));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagar(@PathVariable(name = "id") Integer id) {
        exemplarService.removerExemplar(id);
        return ResponseEntity.noContent().build();
    }

}
