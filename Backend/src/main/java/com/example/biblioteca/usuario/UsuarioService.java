package com.example.biblioteca.usuario;

import com.example.biblioteca.usuario.entity.Role;
import com.example.biblioteca.usuario.entity.Usuario;

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

