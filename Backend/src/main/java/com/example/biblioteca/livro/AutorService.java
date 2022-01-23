package com.example.biblioteca.livro;

import com.example.biblioteca.exceptions.ResourceNotFoundException;
import com.example.biblioteca.livro.entity.Autor;

import com.example.biblioteca.livro.repository.AutorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AutorService {

    private final AutorRepository autorRepository;

    public Autor criarAutor(Autor autor) {
        return autorRepository.save(autor);
    }

    public List<Autor> listarCategoria() {
        return autorRepository.findAll();
    }

    public Autor consultar(Integer id) {
        var autor = autorRepository.findById(id);
        if (autor.isEmpty()) {
            throw new ResourceNotFoundException("Categoria não encontrada");
        }
        return autor.get();
    }

    public void remover(Integer id) {
        consultar(id);
        autorRepository.deleteById(id);
    }
}