package com.example.biblioteca.cliente.entity;

import com.example.biblioteca.endereco.entity.Endereco;
import com.example.biblioteca.pessoa.entity.Pessoa;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "clientes")
public class Cliente extends Pessoa {

    @Column
    private String documento;

    @OneToMany(mappedBy = "cliente",cascade= CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Endereco> enderecos = new ArrayList<>();

    public Cliente(Integer id) {
        super.setId(id);

    }

    public void setDocumento(String documento) {
        this.documento = documento.replaceAll("\\D","");
    }
}
