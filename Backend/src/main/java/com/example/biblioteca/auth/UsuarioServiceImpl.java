package com.example.biblioteca.auth;

import com.example.biblioteca.auth.entity.Role;
import com.example.biblioteca.auth.entity.Usuario;
import com.example.biblioteca.auth.repository.RoleRepository;
import com.example.biblioteca.auth.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service @RequiredArgsConstructor @Transactional @Slf4j
public class UsuarioServiceImpl implements UsuarioService{

    private final UsuarioRepository usuarioRepository;
    private final RoleRepository roleRepository;

    @Override
    public Usuario saveUser(Usuario user) {
        log.info("Novo usuario {} salvo com sucessos no banco de dados",user.getUsername());
        return usuarioRepository.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        log.info("Nova role {} salvo com sucessos no banco de dados", role.getRoleName());
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        log.info("Adicionado role {} para usuario{}", roleName, username);
        Usuario user = usuarioRepository.findByUsername(username);
        Role role = roleRepository.findByName(roleName);
        user.getRoles().add(role);

    }

    @Override
    public Usuario getUsuario(String username) {
        log.info("Buscar usuario} para usuario{}", username);
        return usuarioRepository.findByUsername(username);
    }

    @Override
    public List<Usuario> getUsers() {
        log.info("Buscar todos usuarios");
        return usuarioRepository.findAll();
    }
}
