package com.proyecto.proyecto.service;

import java.util.Optional;

import com.proyecto.proyecto.ProyectoApplication;
import com.proyecto.proyecto.exceptions.NotFoundException;
import com.proyecto.proyecto.model.Usuario;
import com.proyecto.proyecto.model.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UsuarioService {

    @Autowired
    UsuarioRepository repository;

    @GetMapping("/usuarios")
    Iterable<Usuario> getUsuarios() {
        Iterable<Usuario> usuarios = repository.findAll();

        for (Usuario usuario : usuarios) {
            ProyectoApplication.users.put(usuario.getEmail(), usuario);
        }

        return usuarios;
    }

    @GetMapping("/usuarios/{id}")
    Usuario findUsuario(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Usuario not found"));
    }

    @GetMapping("/usuarios/email/{email}")
    Usuario findUsuario(@PathVariable String email) {
        Usuario usuario = repository.findByEmail(email).orElseThrow(() -> new NotFoundException("Usuario not found"));
        ProyectoApplication.users.put(usuario.getEmail(), usuario);
        return usuario;
    }

    @PostMapping("/usuarios/create")
    Usuario createUsuario(@RequestBody Usuario usuario) {
        ProyectoApplication.users.put(usuario.getEmail(), usuario);
        return repository.save(usuario);
    }

    @PutMapping("/usuarios/update/{id}")
    Usuario updateUsuario(@PathVariable Long id, @RequestBody Usuario usuarioData) {

        Usuario usuario = findUsuario(id);
        usuario.setName(usuarioData.getNombre());
        usuario.setApellidos(usuarioData.getApellidos());
        usuario.setEmail(usuarioData.getEmail());
        usuario.setContra(usuarioData.getContra());
        usuario.setRol(usuarioData.getRol());

        return repository.save(usuario);
    }

    @DeleteMapping("/usuarios/delete/{id}")
    void deleteUsuario(@PathVariable Long id) {

        if (repository.existsById(id)) {
            Optional<Usuario> usuario = repository.findById(id);
            ProyectoApplication.users.remove(usuario.get().getEmail());
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}