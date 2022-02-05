package com.example.biblioteca.emprestimo;

import com.example.biblioteca.emprestimo.entity.Exemplar;
import com.example.biblioteca.emprestimo.repository.ExemplarRepository;
import com.example.biblioteca.exceptions.BusinessRuleException;
import com.example.biblioteca.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ExemplarService {

    private final ExemplarRepository exemplarRepository;

    public Exemplar cadastrarExemplar(Exemplar exemplar){
        if(exemplar.getId() != null){
            throw new BusinessRuleException("O exemplar o livro já está cadastrado");
        }

        System.out.println(exemplar);
        System.out.println("fodas");
        return exemplarRepository.save(exemplar);
    }
    public Exemplar buscarExemplarPorId(Integer id){
        return exemplarRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("O exemplar do livro não encontrado")
        );
    }
    public Exemplar atualizarExemplar(Integer id, Exemplar ex){
        var exemplar = this.buscarExemplarPorId(id);
        ex.setId((exemplar.getId()));
        return exemplarRepository.save(ex);
    }
    public List<Exemplar> listarExemplar(){
        return exemplarRepository.findAll();
    }
    public void removerExemplar(Integer id) {
        buscarExemplarPorId(id);
        exemplarRepository.deleteById(id);
    }
}
