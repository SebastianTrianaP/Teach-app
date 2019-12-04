package com.proyecto.proyecto.service;

import com.proyecto.proyecto.exceptions.NotFoundException;
import com.proyecto.proyecto.model.Respuesta;
import com.proyecto.proyecto.model.RespuestaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class RespuestaService {

    @Autowired
    RespuestaRepository repository;

    @GetMapping("/respuestas")
    Iterable<Respuesta> getRespuestas() {
        return repository.findAll();
    }

    @GetMapping("/respuestas/{id}")
    Respuesta findRespuesta(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Respuesta not found"));
    }
    @PostMapping("/respuestas/create")
    Respuesta createRespuesta(@RequestBody Respuesta respuesta) {
        return repository.save(respuesta);
    }

    @PutMapping("/respuestas/edit/{id}")
    Respuesta updateRespuesta(@PathVariable Long id, @RequestBody Respuesta respuestaData) {

        Respuesta respuesta = findRespuesta(id);
        respuesta.setMensaje(respuestaData.getMensaje());

        return repository.save(respuesta);
    }

    @DeleteMapping("/respuestas/delete/{id}")
    void deleteRespuesta(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}