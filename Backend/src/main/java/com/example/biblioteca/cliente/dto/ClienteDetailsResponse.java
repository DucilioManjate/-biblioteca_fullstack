package com.example.biblioteca.cliente.dto;

import com.example.biblioteca.cliente.entity.Cliente;
import com.example.biblioteca.endereco.dto.EnderecoResponse;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class ClienteDetailsResponse extends ClienteResponse {
    private List<EnderecoResponse> enderecos;

    public ClienteDetailsResponse(Cliente cliente) {
        super(cliente);
        this.enderecos =cliente.getEnderecos().stream().map(EnderecoResponse::new).collect(Collectors.toList());
    }
}
