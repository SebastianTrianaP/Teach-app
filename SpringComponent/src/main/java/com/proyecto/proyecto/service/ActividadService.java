package com.proyecto.proyecto.service;

import com.proyecto.proyecto.exceptions.NotFoundException;
import com.proyecto.proyecto.model.Actividad;
import com.proyecto.proyecto.model.ActividadRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ActividadService {

    @Autowired
    ActividadRepository repository;

    @GetMapping("/actividades")
    Iterable<Actividad> getActividades() {
        return repository.findAll();
    }

    @GetMapping("/actividades/{id}")
    Actividad findActividad(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Actividad not found"));
    }

    @PostMapping("/actividades/create")
    Actividad createActividad(@RequestBody Actividad actividad) {
        return repository.save(actividad);
    }

    @PutMapping("/actividades/edit/{id}")
    Actividad updateActividad(@PathVariable Long id, @RequestBody Actividad actividadData) {

        Actividad actividad = findActividad(id);
        actividad.setRespuestaS(actividadData.getRespuestaS());
        actividad.setDescripcion(actividadData.getDescripcion());
        actividad.setFechaEntrega(actividadData.getFechaEntrega());
        actividad.setTitulo(actividadData.getTitulo());

        return repository.save(actividad);
    }

    @DeleteMapping("/actividades/delete/{id}")
    void deleteActividad(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}