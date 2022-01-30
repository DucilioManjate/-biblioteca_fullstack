package com.example.biblioteca.auth.resource;

import com.example.biblioteca.auth.UsuarioService;
import com.example.biblioteca.auth.entity.Role;
import com.example.biblioteca.auth.entity.Usuario;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController @RequiredArgsConstructor
@RequestMapping("/api/auth")
public class UsuarioResource {
    private final UsuarioService usuarioService;

    @GetMapping("/usuarios")
    public ResponseEntity<List<Usuario>>getUsers(){
        return ResponseEntity.ok().body(usuarioService.getUsers());
    }
    @PostMapping("/usuario/salvo")
    public ResponseEntity<Usuario>saveUser(@RequestBody Usuario user){
        URI uri = URI.create(ServletUriComponentsBuilder.fromContextPath().path("/api/usuario/salvo").toUriString());
        return ResponseEntity.created(uri).body(usuarioService.saveUser(user));
    }
    @PostMapping("/role/salve")
    public ResponseEntity<Role>saveUser(@RequestBody Role role){
        URI uri = URI.create(ServletUriComponentsBuilder.fromContextPath().path("/api/role/salvo").toUriString());
        return ResponseEntity.created(uri).body(usuarioService.saveRole(role));
    }
    @PostMapping("/role/AddUsuario")
    public ResponseEntity<?>addRoleToUsuario(@RequestBody RoleToUsuarioFrom form){
        usuarioService.addRoleToUser(form.getUsername(),form.getRoleName());
        return ResponseEntity.ok().build();
    }
}

@Data
class RoleToUsuarioFrom {
    private String username;
    private String roleName;
}
