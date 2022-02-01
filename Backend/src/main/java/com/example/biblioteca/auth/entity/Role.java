package com.example.biblioteca.auth.entity;

public enum Role {
    BIBLIOTECARIO("BIBLIOTECARIO"),
    GESTOR("GESTOR"),
    RECEPCIONISTA("RECEPCIONISTA");

    private String nome;

    private Role(String nome) {
        this.nome = nome;
    }
    public String getNome() {
        return this.nome;
    }
}
