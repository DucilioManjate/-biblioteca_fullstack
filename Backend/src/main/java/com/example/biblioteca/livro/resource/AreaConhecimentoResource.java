package com.example.biblioteca.livro.resource;

import com.example.biblioteca.livro.AreaConhecimentoService;
import com.example.biblioteca.livro.entity.AreaConhecimento;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/areas-conhecimento")
public class AreaConhecimentoResource {

    private final AreaConhecimentoService areaConhecimentoService;


    @PostMapping
    public ResponseEntity<AreaConhecimento> criar(@RequestBody AreaConhecimento areaConhecimento){
        return ResponseEntity.status(HttpStatus.CREATED).body(areaConhecimentoService.criarAreaConhecimento(areaConhecimento));
    }

    @GetMapping
    public ResponseEntity<List<AreaConhecimento>> listar(){
        return ResponseEntity.ok(areaConhecimentoService.listarAreaConhecimenta());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AreaConhecimento> consulta(@PathVariable(name = "id") Integer id) {
        return ResponseEntity.ok((areaConhecimentoService.consultar(id)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagar(@PathVariable(name = "id") Integer id) {
        areaConhecimentoService.remover(id);
        return ResponseEntity.noContent().build();
    }

}
