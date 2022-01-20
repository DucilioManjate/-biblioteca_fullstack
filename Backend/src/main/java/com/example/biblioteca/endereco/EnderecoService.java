package com.example.biblioteca.endereco;

import com.example.biblioteca.cliente.ClienteService;
import com.example.biblioteca.endereco.entity.Cidade;
import com.example.biblioteca.endereco.entity.Endereco;
import com.example.biblioteca.endereco.entity.Estado;
import com.example.biblioteca.endereco.repository.CidadeRepository;
import com.example.biblioteca.endereco.repository.EnderecoRepository;
import com.example.biblioteca.endereco.repository.EstadoRepository;
import com.example.biblioteca.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EnderecoService {

   private final ClienteService clienteService;
   private final EnderecoRepository enderecoRepository;
   private final EstadoRepository estadoRepository;
   private final CidadeRepository cidadeRepository;

   public Endereco cadastrarEndereco(Endereco endereco){
       var cliente = clienteService.buscarClientId(endereco.getCliente().getId());
       endereco.setCliente(cliente);

       var cidade = this.consultarCidadePorId(endereco.getCidade().getId());
       endereco.setCidade(cidade);

       return enderecoRepository.save(endereco);
   }
    public Endereco consultarEnderecoPorId(Integer id){
        return enderecoRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Endereço não encontrado")
        );
    }
    public Endereco atualizarEndereco(Integer id,Endereco atualizado){
        var endereco = this.consultarEnderecoPorId(id);
        var cliente = clienteService.buscarClientId(atualizado.getCliente().getId());
        var cidade = this.consultarCidadePorId(atualizado.getCidade().getId());

        atualizado.setId(endereco.getId());
        atualizado.setCliente(cliente);
        atualizado.setCidade(cidade);

        return enderecoRepository.save(atualizado);
    }
    public void removerEndereco(Integer id){
        var endereco = this.consultarEnderecoPorId(id);
        enderecoRepository.delete(endereco);
    }
    public List<Endereco> listarEnderecoPorClienteId(Integer id){
        var cliente = clienteService.buscarClientId(id);
        return enderecoRepository.findAllByCliente(cliente);
    }
    public List<Endereco> listarEnderecoPorClienteCpf(String cpf){
        var cliente = clienteService.buscarClienteCpf(cpf);
        return enderecoRepository.findAllByCliente(cliente);
    }

    public List<Estado> listarEstados(){
        return estadoRepository.findAll();
    }
    public List<Cidade> listarCidadePorEstadoId(Integer id){
        return cidadeRepository.findAllByEstado_Id(id);
    }
    public List<Cidade> listarCidadePorSiglaEstado(String uf){
        return cidadeRepository.findAllByEstado_Uf(uf);
    }
    public Cidade consultarCidadePorId(Integer id){
        return cidadeRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("cidade não encontrada")
        );
    }
}

