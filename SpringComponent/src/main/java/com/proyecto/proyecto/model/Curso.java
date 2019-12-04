package com.proyecto.proyecto.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Curso{
    @Id
    @GeneratedValue
    private Long ID;
    
    private String nombre;
    @ManyToMany
    private List<Profesor> profesores;
    @ManyToMany
    private List<Estudiante> estudiantes;
    @OneToMany(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "actividad_id")
    private List<Actividad> actividades;

    public Curso(){
    }
    public Long getID(){
        return this.ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<Profesor> getProfesores() {
        return profesores;
    }

    public void setProfesores(List<Profesor> profesores) {
        this.profesores = profesores;
    }

    public List<Estudiante> getEstudiantes() {
        return estudiantes;
    }

    public void setEstudiantes(List<Estudiante> estudiantes) {
        this.estudiantes = estudiantes;
    }

    public List<Actividad> getActividades() {
        return actividades;
    }

    public void setActividades(List<Actividad> actividades) {
        this.actividades = actividades;
    }
    
    

}