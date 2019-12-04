package com.proyecto.proyecto.service;

import java.util.ArrayList;
import java.util.List;

import com.proyecto.proyecto.exceptions.NotFoundException;
import com.proyecto.proyecto.model.Curso;
import com.proyecto.proyecto.model.CursoRepository;
import com.proyecto.proyecto.model.Estudiante;
import com.proyecto.proyecto.model.EstudianteRepository;
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
public class CursoService{

    @Autowired
    CursoRepository repository;

    ProfesorRepository repositoryProfesores;

    EstudianteRepository repositoryEstudiante;

    @GetMapping("/cursos")
    Iterable<Curso> getCursos() {
        return repository.findAll();
    }

    @GetMapping("/cursos/{id}")
    Curso findCursos(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Curso not found"));
    }
    @GetMapping("/cursos/profesores/{id}")
    Iterable<Curso> findCursosProfesores(@PathVariable Long id) {
        Iterable<Curso> cursos = getCursos();
        List<Curso> respuesta = new ArrayList<>();
        for (Curso curso : cursos) {
            List<Profesor> profesores = curso.getProfesores();
            for (Profesor profesor : profesores) {
                if(id.equals(profesor.getId())){
                    respuesta.add(curso);
                }
            }
        }

        return respuesta;
    }

    @GetMapping("/cursos/estudiantes/{id}")
    Iterable<Curso> findCursosEstudiantes(@PathVariable Long id) {
        Iterable<Curso> cursos = getCursos();
        List<Curso> respuesta = new ArrayList<>();
        for (Curso curso : cursos) {
            List<Estudiante> estudiantes = curso.getEstudiantes();
            for (Estudiante estudiante : estudiantes) {
                if(id.equals(estudiante.getId())){
                    respuesta.add(curso);
                }
            }
        }

        return respuesta;
    }

    @PostMapping("/cursos/create")
    Curso createCursos(@RequestBody Curso curso) {
        return repository.save(curso);
    }

    @PutMapping("/cursos/edit/{id}")
    Curso updateCurso(@PathVariable Long id, @RequestBody Curso cursoData) {

        System.out.println(cursoData);
        Curso curso = findCursos(id);
        curso.setNombre(cursoData.getNombre());
        curso.setProfesores(cursoData.getProfesores());
        curso.setActividades(cursoData.getActividades());
        curso.setEstudiantes(cursoData.getEstudiantes());
        return repository.save(curso);
    }

    @DeleteMapping("/cursos/delete/{id}")
    void deleteCurso(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }








}