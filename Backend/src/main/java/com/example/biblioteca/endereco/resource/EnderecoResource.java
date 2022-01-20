package com.example.biblioteca.endereco.resource;

import com.example.biblioteca.endereco.EnderecoService;
import com.example.biblioteca.endereco.dto.CidadeResponse;
import com.example.biblioteca.endereco.dto.EnderecoRequest;
import com.example.biblioteca.endereco.dto.EnderecoResponse;
import com.example.biblioteca.endereco.entity.Endereco;
import com.example.biblioteca.endereco.entity.Estado;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/enderecos")
public class EnderecoResource {

    private final  EnderecoService service;

    @PostMapping
    public ResponseEntity<EnderecoResponse> create(@RequestBody EnderecoRequest endereco){
        var novoEndereco = service.cadastrarEndereco(endereco.toModel());
        return ResponseEntity.status(HttpStatus.CREATED).body(new EnderecoResponse(novoEndereco));
    }

    @GetMapping
    public ResponseEntity<List<EnderecoResponse>> listarEnderecosCliente(
            @RequestParam(required = false) Integer clienteId,
            @RequestParam(required = false) String clienteCpf
    ){
        if (clienteId != null){
            var endereco = service.listarEnderecoPorClienteId(clienteId);
            return ResponseEntity.status(HttpStatus.OK).body(
                    endereco.stream().map(EnderecoResponse::new).collect(Collectors.toList())
            );
        }

        else if (clienteCpf != null){
            var endereco = service.listarEnderecoPorClienteCpf(clienteCpf);
            return ResponseEntity.status(HttpStatus.OK).body(
                    endereco.stream().map(EnderecoResponse::new).collect(Collectors.toList())
            );
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnderecoResponse> consultarEnderecoPorId(@PathVariable("id") Integer id){
        var endereco = service.consultarEnderecoPorId(id);
        return ResponseEntity.status(HttpStatus.OK).body(new EnderecoResponse(endereco));
    }

    @PutMapping("/{id}")
    public ResponseEntity<EnderecoResponse> atualizarEndereco(@PathVariable("id") Integer id, @RequestBody EnderecoRequest updated){
        var endereco = service.atualizarEndereco(id,updated.toModel());
        return ResponseEntity.status(HttpStatus.OK).body(new EnderecoResponse(endereco));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removerEndereco(@PathVariable("id") Integer id){
        service.removerEndereco(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
    @GetMapping("/estados")
    public ResponseEntity<List<Estado>> listarEstado(){
        return ResponseEntity.status(HttpStatus.OK).body(service.listarEstados());
    }


    @GetMapping("/cidades")
    public ResponseEntity<List<CidadeResponse>> listarCidadesPorEstados(
            @RequestParam(required = false) Integer estadoId,
            @RequestParam(required = false) String uf
    ){
        if (estadoId != null){
            var cidadelista = service.listarCidadePorEstadoId(estadoId);
            return ResponseEntity.status(HttpStatus.OK).body(
                   cidadelista.stream().map(CidadeResponse::new).collect(Collectors.toList())
            );
        }

        else if (uf != null){
            var cidadelista = service.listarCidadePorSiglaEstado(uf);
            return ResponseEntity.status(HttpStatus.OK).body(
                    cidadelista.stream().map(CidadeResponse::new).collect(Collectors.toList())
            );
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}
