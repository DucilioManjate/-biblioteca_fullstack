package com.example.biblioteca.emprestimo.resource;

import com.example.biblioteca.emprestimo.EmprestimoService;
import com.example.biblioteca.emprestimo.entity.Emprestimo;
import com.example.biblioteca.emprestimo.entity.Exemplar;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/emprestimos")
public class EmprestimoResource {

    private final EmprestimoService emprestimoService;

    @PostMapping
    public ResponseEntity<Emprestimo> criar(@RequestBody Emprestimo emprestimo){
        return ResponseEntity.status(HttpStatus.CREATED).body(emprestimoService.cadastrarEmprestimo(emprestimo));
    }

    @GetMapping
    public ResponseEntity<List<Emprestimo>> listar(){
        return ResponseEntity.ok(emprestimoService.listarEmprestimo());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Emprestimo> consulta(@PathVariable(name = "id") Integer id) {
        return ResponseEntity.ok((emprestimoService.buscarEmprestimoPorId(id)));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagar(@PathVariable(name = "id") Integer id) {
        emprestimoService.removerEmprestimo(id);
        return ResponseEntity.noContent().build();
    }
}
