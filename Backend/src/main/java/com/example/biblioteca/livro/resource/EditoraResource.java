package com.example.biblioteca.livro.resource;

import com.example.biblioteca.livro.CategoriaService;
import com.example.biblioteca.livro.EditoraService;
import com.example.biblioteca.livro.entity.Autor;
import com.example.biblioteca.livro.entity.Categoria;
import com.example.biblioteca.livro.entity.Editora;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/editoras")
@CrossOrigin
public class EditoraResource {

    private final EditoraService editoraService;


    @PostMapping
    public ResponseEntity<Editora> criar(@RequestBody Editora editora){
        return ResponseEntity.status(HttpStatus.CREATED).body(editoraService.criarEditora(editora));
    }

    @GetMapping
    public ResponseEntity<List<Editora>> listar(){
        return ResponseEntity.ok(editoraService.listarEditora());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Editora> consulta(@PathVariable(name = "id") Integer id) {
        return ResponseEntity.ok((editoraService.consultar(id)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagar(@PathVariable(name = "id") Integer id) {
        editoraService.remover(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Editora>update(@Valid @RequestBody Editora editora) throws Exception {
        return ResponseEntity.ok(editoraService.atualizarEditora(editora));
    }
}
