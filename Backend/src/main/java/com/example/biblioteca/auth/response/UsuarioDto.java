package com.example.biblioteca.auth.response;

import com.example.biblioteca.auth.entity.Role;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
public class UsuarioDto {
    private String username;
    private String senha;
    private Role role;
}
