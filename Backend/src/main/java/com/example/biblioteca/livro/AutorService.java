package com.example.biblioteca.livro;


import com.example.biblioteca.exceptions.ResourceNotFoundException;
import com.example.biblioteca.livro.entity.Autor;

import com.example.biblioteca.livro.repository.AutorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AutorService {

    private final AutorRepository autorRepository;

    public Autor criarAutor(Autor autor) {
        return autorRepository.save(autor);
    }

    public List<Autor> listarAutor() {
        return autorRepository.findAll();
    }

    public Autor consultar(Integer id) {
        var autor = autorRepository.findById(id);
        if (autor.isEmpty()) {
            throw new ResourceNotFoundException("Categoria não encontrada");
        }
        return autor.get();
    }
   public Autor atualizar(Autor autor) throws Exception{
        if(!autorRepository.existsById(autor.getId())) {
            throw new Exception("Autor não encontrado!");
        }
        return autorRepository.save(autor);
   }

   public void remover(Integer id) throws Exception {
        if (!autorRepository.existsById(id)) {
            throw new Exception("Autor Não encontrado");
        }
        autorRepository.deleteById(id);
   }

//    public void remover(Integer id) {
//        consultar(id);
//        autorRepository.deleteById(id);
//    }
}