package com.example.biblioteca.emprestimo;

import com.example.biblioteca.emprestimo.entity.Emprestimo;
import com.example.biblioteca.emprestimo.entity.Exemplar;
import com.example.biblioteca.emprestimo.repository.EmprestimoRepository;
import com.example.biblioteca.exceptions.BusinessRuleException;
import com.example.biblioteca.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmprestimoService {

    private final EmprestimoRepository emprestimoRepository;

    public Emprestimo cadastrarEmprestimo(Emprestimo emprestimo){

        return emprestimoRepository.save(emprestimo);
    }

    public Emprestimo buscarEmprestimoPorId(Integer id){
        return emprestimoRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Emprestimo não encontrado")
        );
    }

    public Emprestimo atualizarEmprestimo(Integer id, Emprestimo ex){
        var emprestimo = this.buscarEmprestimoPorId(id);
        ex.setId((emprestimo.getId()));
        return emprestimoRepository.save(ex);
    }
    public List<Emprestimo> listarEmprestimo(){
        return emprestimoRepository.findAll();
    }
    public void removerEmprestimo(Integer id) {
        buscarEmprestimoPorId(id);
        emprestimoRepository.deleteById(id);
    }

}
