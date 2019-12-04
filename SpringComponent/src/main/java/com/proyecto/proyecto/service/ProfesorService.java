package com.proyecto.proyecto.service;

import com.proyecto.proyecto.exceptions.NotFoundException;
import com.proyecto.proyecto.model.Profesor;
import com.proyecto.proyecto.model.ProfesorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ProfesorService {

    @Autowired
    ProfesorRepository repository;

    @GetMapping("/profesores")
    Iterable<Profesor> getProfesores() {
        return repository.findAll();
    }   

    @GetMapping("/profesores/{id}")
    Profesor findProfesor(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Profesor not found"));
    }

    @PostMapping("/profesores/create")
    Profesor createProfesor(@RequestBody Profesor profesor) {
        return repository.save(profesor);
    }

    @PutMapping("/profesores/edit/{id}")
    Profesor updateProfesor(@PathVariable Long id, @RequestBody Profesor profesorData) {

        Profesor profesor = findProfesor(id);

        return repository.save(profesor);
    }

    @DeleteMapping("/profesores/delete/{id}")
    void deleteProfesor(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}