package com.proyecto.proyecto.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;


@Entity
@DiscriminatorValue(value = "Estudiante")
public class Estudiante extends Usuario{

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Respuesta> respuestas;
    
    public Estudiante(){
        super();
    }
    public List<Respuesta> getRespuestas() {
        return respuestas;
    }

    public void setRespuestas(List<Respuesta> respuestas) {
        this.respuestas = respuestas;
    }

    


}