package com.example.biblioteca.cliente.dto;

import com.example.biblioteca.cliente.entity.Cliente;
import lombok.Data;

@Data
public class ClienteResponse {

    private Integer id;
    private String nomeCompleto;
    private String telefone;
    private String email;
    private String cpf;
    private String documento;

    public ClienteResponse(Cliente cadastro) {
        this.id = cadastro.getId();
        this.nomeCompleto = cadastro.getNomeCompleto();
        this.telefone = cadastro.getTelefone();
        this.email = cadastro.getEmail();
        this.cpf = cadastro.getCpf();
        this.documento =cadastro.getDocumento();
    }

}
