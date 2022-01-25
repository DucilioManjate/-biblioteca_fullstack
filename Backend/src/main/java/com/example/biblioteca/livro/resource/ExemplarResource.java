package com.example.biblioteca.livro.resource;

import com.example.biblioteca.cliente.dto.ClienteRequest;
import com.example.biblioteca.cliente.dto.ClienteResponse;
import com.example.biblioteca.emprestimo.ExemplarService;
import com.example.biblioteca.emprestimo.entity.Exemplar;
import com.example.biblioteca.livro.entity.Livro;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/exemplares")
public class ExemplarResource {
    private final ExemplarService exemplarService;

    @GetMapping
    public ResponseEntity<List<Exemplar>> listarExemplar(){
        return ResponseEntity.ok(exemplarService.listarExemplar());
    }

    @PostMapping
    public ResponseEntity<Exemplar> cadastrarExemplar(@RequestBody Exemplar exemplar){
        return ResponseEntity.status(HttpStatus.CREATED).body(exemplarService.cadastrarExemplar(exemplar));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Exemplar> consultaExemplar(@PathVariable(name = "id") Integer id) {
        return ResponseEntity.ok((exemplarService.buscarExemplarPorId(id)));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagar(@PathVariable(name = "id") Integer id) {
        exemplarService.removerExemplar(id);
        return ResponseEntity.noContent().build();
    }

}
