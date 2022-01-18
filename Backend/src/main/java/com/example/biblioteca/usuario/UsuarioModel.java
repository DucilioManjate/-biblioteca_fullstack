package com.example.biblioteca.usuario;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



    @Entity
    @Data
    @AllArgsConstructor
    public class UsuarioModel {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;

        @NotNull
//        @Size(min = 1, max = 50, message = "E-mail deve ter entre 1 e 50 caracteres")
        private String email;

        @NotNull
        private String senha;

        public UsuarioModel() {

        }
    }
