package com.example.biblioteca.auth;

import com.example.biblioteca.auth.entity.Role;
import com.example.biblioteca.auth.entity.Usuario;
import com.example.biblioteca.auth.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UsuarioService {
Usuario saveUser(Usuario user);
Role saveRole(Role role);
void addRoleToUser(String username, String roleName);
Usuario getUsuario(String username);
List<Usuario>getUsers();

}

