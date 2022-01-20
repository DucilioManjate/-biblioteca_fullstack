package com.example.biblioteca.auth;

import com.example.biblioteca.auth.entity.Usuario;
import com.example.biblioteca.auth.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario create(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> index() {
        return usuarioRepository.findAll();
    }

}

