package com.example.biblioteca.cliente.resource;

import com.example.biblioteca.cliente.ClienteService;
import com.example.biblioteca.cliente.dto.ClienteDetailsResponse;
import com.example.biblioteca.cliente.dto.ClienteRequest;
import com.example.biblioteca.cliente.dto.ClienteResponse;
import com.example.biblioteca.cliente.entity.Cliente;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/clientes")
public class ClienteResource {


    private final ClienteService service;

    @PostMapping
    public ResponseEntity<ClienteResponse> cadastrarCliente(@RequestBody ClienteRequest cliente){
        var cadastro = service.cadastrar(cliente.toModel());
        return ResponseEntity.status(HttpStatus.CREATED).body(new ClienteResponse(cadastro));
    }

    @GetMapping
    public ResponseEntity<Page<ClienteResponse>> listarClientes(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sort
            ){
        var sorting = Sort.by(sort);
        Pageable pageable = PageRequest.of(page,size,sorting);

        var lista = service.listarClientes(pageable).map(ClienteResponse::new);
        return ResponseEntity.status(HttpStatus.OK).body(lista);
    }

    @GetMapping("/query")
    public ResponseEntity<ClienteDetailsResponse> consultarCliente(
            @RequestParam(required = false) Integer id,
            @RequestParam(required = false) String cpf
    ){
        if (id != null){
            var cliente = service.buscarClientId(id);
            return ResponseEntity.status(HttpStatus.OK).body(new ClienteDetailsResponse(cliente));

        } else if ( cpf != null){
            var cliente = service.buscarClienteCpf(cpf);
            return ResponseEntity.status(HttpStatus.OK).body(new ClienteDetailsResponse(cliente));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

    @PutMapping("/query")
    public ResponseEntity<ClienteResponse> atualizarCliente(
            @RequestParam(required = false) Integer id,
            @RequestParam(required = false) String cpf,
            @RequestBody ClienteRequest atualizarCliente
    ){
        if (id != null){
            var cliente = service.atualizar(id,atualizarCliente.toModel());
            return ResponseEntity.status(HttpStatus.OK).body(new ClienteResponse(cliente));

        } else if ( cpf != null){
            var cliente = service.atualizar(cpf,atualizarCliente.toModel());
            return ResponseEntity.status(HttpStatus.OK).body(new ClienteResponse(cliente));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleta(@PathVariable (value="id") Integer id) {
        service.deletarCliente(id);
        return ResponseEntity.noContent().build();
    }

}
