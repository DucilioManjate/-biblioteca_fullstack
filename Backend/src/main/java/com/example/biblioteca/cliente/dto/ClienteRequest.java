package com.example.biblioteca.cliente.dto;

import com.example.biblioteca.cliente.entity.Cliente;
import lombok.Data;

@Data
public class ClienteRequest {

    private String nomeCompleto;
    private String telefone;
    private String email;
    private String cpf;
    private String documento;

    public Cliente toModel(){
        var cliente = new Cliente();
        cliente.setNomeCompleto(nomeCompleto);
        cliente.setDocumento(documento);
        cliente.setCpf(cpf);
        cliente.setEmail(email);
        cliente.setTelefone(telefone);
        return cliente;
    }

}
