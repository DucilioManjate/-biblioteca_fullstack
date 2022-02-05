package com.example.biblioteca.auth.resource;
import com.example.biblioteca.auth.UsuarioImpService;
import com.example.biblioteca.auth.entity.Usuario;
import com.example.biblioteca.auth.response.UsuarioDto;
import com.example.biblioteca.exceptions.ObjectNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;


@CrossOrigin("*")
@RestController @RequiredArgsConstructor
@RequestMapping("/api/auth")
public class UsuarioResource {

    @Autowired
    private UsuarioImpService service;


    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable(value="id") Integer id) {

        ModelMapper modelMapper = new ModelMapper();
        Usuario usuario = service.findById(id);

        if(usuario == null) {
            throw new ObjectNotFoundException("Object "+Usuario.class.getName()+" not found! id "+id);
        }

        UsuarioDto usuarioDto = modelMapper.map(usuario,UsuarioDto.class);
        return ResponseEntity.ok().body(usuarioDto);
    }


    @PostMapping()
    public ResponseEntity<Void> insert(@RequestBody UsuarioDto dto){

        ModelMapper modelMapper = new ModelMapper();
        Usuario obj = modelMapper.map(dto,Usuario.class);

        obj = this.service.insert(obj);
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{id}")
                .buildAndExpand(obj.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@RequestBody UsuarioDto dto, @PathVariable(value="id") Integer id){
        ModelMapper modelMapper = new ModelMapper();
        Usuario obj = modelMapper.map(dto,Usuario.class);
        obj.setId(id);
        obj = this.service.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable(value="id") Integer id) {
        service.deleteUsuario(id);
        return ResponseEntity.noContent().build();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }



}
