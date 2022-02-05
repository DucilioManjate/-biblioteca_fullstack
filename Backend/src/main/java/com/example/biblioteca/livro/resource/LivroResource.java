package com.example.biblioteca.livro.resource;

import com.example.biblioteca.livro.CategoriaService;
import com.example.biblioteca.livro.LivroService;
import com.example.biblioteca.livro.entity.Autor;
import com.example.biblioteca.livro.entity.Categoria;
import com.example.biblioteca.livro.entity.Livro;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/livros")
public class LivroResource {

    private final LivroService livroService;

    @PostMapping
    public ResponseEntity<Livro> criar(@RequestBody Livro livro){
        return ResponseEntity.status(HttpStatus.CREATED).body(livroService.criarLivro(livro));
    }

    @GetMapping
    public ResponseEntity<List<Livro>> listar(){

        return ResponseEntity.ok(livroService.listarLivro());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Livro> consulta(@PathVariable(name = "id") Integer id) {
        return ResponseEntity.ok((livroService.consultar(id)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Livro>update(@Valid @RequestBody Livro livro) throws Exception {
        return ResponseEntity.ok(livroService.atualizarLivro(livro));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagar(@PathVariable(name = "id") Integer id) {
        livroService.remover(id);
        return ResponseEntity.noContent().build();
    }
}
