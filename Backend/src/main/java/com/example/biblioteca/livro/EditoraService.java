package com.example.biblioteca.livro;

import com.example.biblioteca.exceptions.ResourceNotFoundException;
import com.example.biblioteca.livro.entity.Autor;
import com.example.biblioteca.livro.entity.Categoria;
import com.example.biblioteca.livro.entity.Editora;
import com.example.biblioteca.livro.repository.CategoriaRepository;
import com.example.biblioteca.livro.repository.EditoraRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EditoraService {

    private final EditoraRepository editoraRepository;

    public Editora criarEditora(Editora editora){
        return editoraRepository.save(editora);
    }
    public List<Editora> listarEditora(){
        return editoraRepository.findAll();
    }
    public Editora consultar(Integer id){
        var editora = editoraRepository.findById(id);
        if (editora.isEmpty()){
            throw new ResourceNotFoundException("Editora não encontrada");
        }
        return editora.get();
    }
    public Editora atualizarEditora(Editora editora) throws Exception{
        if(!editoraRepository.existsById(editora.getId())) {
            throw new Exception("Editora não encontrado!");
        }
        return editoraRepository.save(editora);
    }
    public void remover(Integer id) {
        consultar(id);
        editoraRepository.deleteById(id);
    }
}
