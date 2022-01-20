package com.example.biblioteca.cliente;

import com.example.biblioteca.cliente.entity.Cliente;
import com.example.biblioteca.cliente.repository.ClienteRepository;
import com.example.biblioteca.exceptions.BusinessRuleException;
import com.example.biblioteca.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClienteService{

    private final ClienteRepository clienteRepository;

    public Cliente cadastrar(Cliente cliente) {
        //se o sistema achar o cadastro do cliente pelo cpf vai jogar na var se estiver vazio o cliente nao esta cadastrado caso sim ja existe
        var cpfCadastrado = clienteRepository.findClienteByCpf(cliente.getCpf());

        if(cpfCadastrado.isPresent()){
            throw new BusinessRuleException("cliente já cadastrado");
        }

        return clienteRepository.save(cliente);
    }

    public Page<Cliente> listarClientes(Pageable pageable) {
        return clienteRepository.findAll(pageable);
    }
    public Cliente buscarClienteCpf(String cpf){
        return clienteRepository.findClienteByCpf(cpf).orElseThrow(
                () -> new ResourceNotFoundException("cliente não encontrado")
        );
    }

    public Cliente buscarClientId(Integer id){
        return clienteRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("cliente não encontrado")
        );
    }
    public Cliente atualizar(Integer id, Cliente update){
        var cliente = this.buscarClientId(id);
        update.setId(cliente.getId());
        return clienteRepository.save(update);
    }
    //polimorfismo retorna a mesma coisa e tem o mesmo nome do metodo
    public Cliente atualizar(String cpf, Cliente update){
        var cliente = this.buscarClienteCpf(cpf);
        update.setId(cliente.getId());
        return clienteRepository.save(update);
    }
}
