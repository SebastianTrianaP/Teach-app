package com.proyecto.proyecto.service;

import com.proyecto.proyecto.exceptions.NotFoundException;
import com.proyecto.proyecto.model.Administrador;
import com.proyecto.proyecto.model.AdministradorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdministradorService {

    @Autowired
    AdministradorRepository repository;

    @GetMapping("/administradores")
    Iterable<Administrador> getAdministradores() {
        return repository.findAll();
    }

    @GetMapping("/administradores/{id}")
    Administrador findAdministrador(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Administrador not found"));
    }

    @PostMapping("/administradores/create")
    Administrador createAdministrador(@RequestBody Administrador administrador) {
        return repository.save(administrador);
    }

    @PutMapping("/administradores/edit/{id}")
    Administrador updateAdministrador(@PathVariable Long id, @RequestBody Administrador usuarioData) {

        Administrador usuario = findAdministrador(id);
        usuario.setName(usuarioData.getNombre());
        usuario.setApellidos(usuarioData.getApellidos());
        usuario.setEmail(usuarioData.getEmail());
        usuario.setContra(usuarioData.getContra());
        usuario.setRol(usuarioData.getRol());

        return repository.save(usuario);
    }

    @DeleteMapping("/administradores/delete/{id}")
    void deleteAdministrador(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}