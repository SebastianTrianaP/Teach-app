package com.proyecto.proyecto.service;

import com.proyecto.proyecto.exceptions.NotFoundException;
import com.proyecto.proyecto.model.Estudiante;
import com.proyecto.proyecto.model.EstudianteRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class EstudianteService {

    @Autowired
    EstudianteRepository repository;

    @GetMapping("/estudiantes")
    Iterable<Estudiante> getEstudiantes() {
        return repository.findAll();
    }

    @GetMapping("/estudiantes/{id}")
    Estudiante findEstudiante(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Estudiante not found"));
    }

    @PostMapping("/estudiantes/create")
    Estudiante createEstudiante(@RequestBody Estudiante estudiante) {
        return repository.save(estudiante);
    }

    @PutMapping("/estudiantes/edit/{id}")
    Estudiante updateEstudiante(@PathVariable Long id, @RequestBody Estudiante usuarioData) {

        Estudiante usuario = findEstudiante(id);
        usuario.setName(usuarioData.getNombre());
        usuario.setApellidos(usuarioData.getApellidos());
        usuario.setEmail(usuarioData.getEmail());
        usuario.setContra(usuarioData.getContra());
        usuario.setRol(usuarioData.getRol());
        usuario.setRespuestas(usuarioData.getRespuestas());

        return repository.save(usuario);
    }

    @DeleteMapping("/estudiantes/delete/{id}")
    void deleteEstudiante(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}