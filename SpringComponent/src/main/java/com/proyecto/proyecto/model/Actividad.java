package com.proyecto.proyecto.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Actividad {
    @Id
    @GeneratedValue
    private Long ID;
    private String descripcion;
    private String fechaEntrega;
    private String titulo;

    
    @OneToMany(cascade = CascadeType.ALL)
    private List<Respuesta> respuestas;

    public Actividad(){
    }

    public Long getID() {
        return ID;
    }

    public void setID(Long iD) {
        ID = iD;
    }

    public List<Respuesta> getRespuestaS() {
        return respuestas;
    }

    public void setRespuestaS(List<Respuesta> respuestaS) {
        this.respuestas = respuestaS;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFechaEntrega() {
        return fechaEntrega;
    }

    public void setFechaEntrega(String fechaEntrega) {
        this.fechaEntrega = fechaEntrega;
    }

    public List<Respuesta> getRespuestas() {
        return respuestas;
    }

    public void setRespuestas(List<Respuesta> respuestas) {
        this.respuestas = respuestas;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    
}
