package com.example.biblioteca.usuario.resource;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController @RequiredArgsConstructor
@RequestMapping("/api/auth")
public class UsuarioResource {
//    private final UsuarioService usuarioService;

//    @GetMapping("/usuarios")
//    public ResponseEntity<List<Usuario>>getUsers(){
//        return ResponseEntity.ok().body(usuarioService.getUsers());
//    }

//    @PostMapping("/usuario/salvo")
//    public ResponseEntity<Usuario>saveUser(@RequestBody Usuario user){
//        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/usuario/salvo").toUriString());
//        return ResponseEntity.created(uri).body(usuarioService.saveUser(user));
//    }
//    @PostMapping("/role/salvo")
//    public ResponseEntity<Role>saveUser(@RequestBody Role role){
//        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/role/salvo").toUriString());
//        return ResponseEntity.created(uri).body(usuarioService.saveRole(role));
//    }
//    @PostMapping("/role/AddUsuario")
//    public ResponseEntity<?>addRoleToUsuario(@RequestBody RoleToUsuarioFrom form){
//        usuarioService.addRoleToUser(form.getUsername(),form.getRoleName());
//        return ResponseEntity.ok().build();
//    }
//}

//@Data
//class RoleToUsuarioFrom {
//    private String username;
//    private String roleName;
}
