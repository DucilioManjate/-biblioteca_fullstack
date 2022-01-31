package com.example.biblioteca.livro;


import com.example.biblioteca.exceptions.ResourceNotFoundException;
import com.example.biblioteca.livro.entity.AreaConhecimento;
import com.example.biblioteca.livro.entity.Categoria;
import com.example.biblioteca.livro.repository.AreaConhecimentoRepository;
import com.example.biblioteca.livro.repository.CategoriaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AreaConhecimentoService {

    private final AreaConhecimentoRepository areaConhecimentoRepository;

    public AreaConhecimento criarAreaConhecimento(AreaConhecimento areaConhecimento){
        return areaConhecimentoRepository.save(areaConhecimento);
    }
    public List<AreaConhecimento> listarAreaConhecimenta(){

        return areaConhecimentoRepository.findAll();
    }

    public AreaConhecimento consultar(Integer id){
        var areaConhecimento= areaConhecimentoRepository.findById(id);
        if (areaConhecimento.isEmpty()){
            throw new ResourceNotFoundException("Area de conhecimento não encontrada");
        }
        return areaConhecimento.get();
    }

    public void remover(Integer id) {
        consultar(id);
        areaConhecimentoRepository.deleteById(id);
    }

}
