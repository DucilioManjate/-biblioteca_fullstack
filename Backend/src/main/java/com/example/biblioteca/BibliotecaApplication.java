package com.example.biblioteca;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BibliotecaApplication {

    public static void main(String[] args) {
        SpringApplication.run(BibliotecaApplication.class, args);


    }

//    CommandLineRunner run(UsuarioService usuarioService) {
//        return args -> {
//            usuarioService.saveRole(new Role(null, "ROLE_USUARIO"));
//            usuarioService.saveRole(new Role(null, "ROLE_MANAGER"));
//            usuarioService.saveRole(new Role(null, "ROLE_ADMIN"));
//            usuarioService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));
//
//            usuarioService.saveUser(new Usuario(null, "liocroons","ducilio","1234", new ArrayList<U>()));
//            usuarioService.saveUser(new Usuario(null, "gestor","g",1234, new ArrayList<>();
//            usuarioService.saveUser(new Usuario(null, "administrador","admin",1234, new ArrayList<>();
//            usuarioService.saveUser(new Usuario(null, "adtotal","super",1234, new ArrayList<>();
//
//            usuarioService.addRoleToUser("liocroons", "ROLE_USUARIO");
//        };
//    }
}
