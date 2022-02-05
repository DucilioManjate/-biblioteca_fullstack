package com.example.biblioteca;

import com.example.biblioteca.auth.UsuarioService;
import com.example.biblioteca.auth.entity.Role;
import com.example.biblioteca.auth.entity.Usuario;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;

@SpringBootApplication
public class BibliotecaApplication {

    public static void main(String[] args) {
        SpringApplication.run(BibliotecaApplication.class, args);

    }

}
