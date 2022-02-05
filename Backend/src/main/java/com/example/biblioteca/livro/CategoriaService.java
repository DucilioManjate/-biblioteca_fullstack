package com.example.biblioteca.livro;

import com.example.biblioteca.exceptions.ResourceNotFoundException;
import com.example.biblioteca.livro.entity.Autor;
import com.example.biblioteca.livro.entity.Categoria;
import com.example.biblioteca.livro.repository.CategoriaRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;

    public Categoria criarCategoria(Categoria categoria){
        return categoriaRepository.save(categoria);
    }
    public List<Categoria> listarCategoria(){
        return categoriaRepository.findAll();
    }
    public Categoria consultar(Integer id){
        var categoria= categoriaRepository.findById(id);
        if (categoria.isEmpty()){
            throw new ResourceNotFoundException("Categoria não encontrada");
        }
        return categoria.get();
    }
    public Categoria atualizarCategoria(Categoria categoria) throws Exception{
        if(!categoriaRepository.existsById(categoria.getId())) {
            throw new Exception("Autor não encontrado!");
        }
        return categoriaRepository.save(categoria);
    }

    public void remover(Integer id) {
        consultar(id);
        categoriaRepository.deleteById(id);
    }
}
