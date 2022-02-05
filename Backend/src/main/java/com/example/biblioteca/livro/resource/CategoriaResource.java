package com.example.biblioteca.livro.resource;

import com.example.biblioteca.livro.CategoriaService;
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
@RequestMapping("/categorias")
@CrossOrigin
public class CategoriaResource {

    private final CategoriaService categoriaService;


    @PostMapping
    public ResponseEntity<Categoria> criar(@RequestBody Categoria categoria){
        return ResponseEntity.status(HttpStatus.CREATED).body(categoriaService.criarCategoria(categoria));
    }
    @PutMapping("/{id}")
    public ResponseEntity<Categoria>update(@Valid @RequestBody Categoria categoria) throws Exception {
        return ResponseEntity.ok(categoriaService.atualizarCategoria(categoria));
    }

    @GetMapping
    public ResponseEntity<List<Categoria>> listar(){
        return ResponseEntity.ok(categoriaService.listarCategoria());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> consulta(@PathVariable(name = "id") Integer id) {
        return ResponseEntity.ok((categoriaService.consultar(id)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagar(@PathVariable(name = "id") Integer id) {
        categoriaService.remover(id);
        return ResponseEntity.noContent().build();
    }

}
