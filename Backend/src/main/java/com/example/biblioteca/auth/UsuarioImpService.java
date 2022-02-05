package com.example.biblioteca.auth;

import com.example.biblioteca.auth.entity.Usuario;
import com.example.biblioteca.auth.repository.UsuarioRepository;
import com.example.biblioteca.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioImpService {

    @Autowired
    private UsuarioRepository repository;

    public Usuario findById(Integer id) {
        Optional<Usuario> obj = this.repository.findById(id);
        return obj.orElse(null);
    }

    public Usuario insert(Usuario obj) {
        obj.setId(null);
        return this.repository.save(obj);
    }

    public Usuario update(Usuario obj) {
        if (this.findById(obj.getId()) == null) {
            throw new ObjectNotFoundException("Obeject"+
                    Usuario.class.getName()+" no found! ID "+obj.getId());
        }
        return this.repository.save(obj);
    }
    public void deleteUsuario(Integer id) {
        if(this.findById(id) == null ) {
            throw new ObjectNotFoundException("Obeject "+Usuario.class.getName()+" no found! ID "+id);
        }
        repository.deleteById(id);
    }
}
