package com.example.biblioteca.livro;

import com.example.biblioteca.exceptions.ResourceNotFoundException;

import com.example.biblioteca.livro.entity.Livro;

import com.example.biblioteca.livro.repository.AreaConhecimentoRepository;
import com.example.biblioteca.livro.repository.AutorRepository;
import com.example.biblioteca.livro.repository.LivroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LivroService {

    private final LivroRepository livroRepository;
    private final AreaConhecimentoRepository areaConhecimentoRepository;
//    private final AutorRepository autorRepository;
    private final EditoraService editoraService;
    private final CategoriaService categoriaService;
    private final AutorService autorService;
    private  final AreaConhecimentoService areaConhecimentoService;

    public Livro criarLivro(Livro livro){

        var editora = editoraService.consultar(livro.getEditora().getId());
        var categoria = categoriaService.consultar(livro.getCategoria().getId());

        var autores = livro
                .getAutores()
                .stream()
                .map(autor -> autorService
                .consultar(autor.getId()))
                .collect(Collectors.toList());

        var areaConhecimento = livro
                .getAreaConhecimentos()
                .stream()
                .map(x -> areaConhecimentoService
                .consultar(x.getId()))
                .collect(Collectors.toList());
//        var areaConhecimentoList = areaConhecimentoRepository.findAllById(areaConhecimento);

        livro.setEditora(editora);
        livro.setCategoria(categoria);
        livro.setAutores(autores);
        livro.setAreaConhecimentos(areaConhecimento);

        return livroRepository.save(livro);

    }
    public List<Livro> listarLivro(){
        return livroRepository.findAll();
    }
    public Livro consultar(Integer id){
        var livro= livroRepository.findById(id);
        if (livro.isEmpty()){
            throw new ResourceNotFoundException("livro não encontrada");
        }
        return livro.get();
    }
    public void remover(Integer id) {
        consultar(id);
        livroRepository.deleteById(id);
    }
}
