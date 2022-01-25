package com.example.biblioteca.emprestimo;

import com.example.biblioteca.emprestimo.entity.Exemplar;
import com.example.biblioteca.emprestimo.repository.ExemplarRepository;
import com.example.biblioteca.exceptions.BusinessRuleException;
import com.example.biblioteca.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ExemplarService {

    private final ExemplarRepository exemplarRepository;

    public Exemplar cadastrarExemplar(Exemplar exemplar){
        var exemplarDoLivroCadastrado = exemplarRepository.findById(exemplar.getId());

        if (exemplarDoLivroCadastrado.isPresent()){
            throw new BusinessRuleException("O exemplar o livro já está cadastrado");
        }
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
    public Page<Exemplar> listarExemplares(Pageable pageable)


}
