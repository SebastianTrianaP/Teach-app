package com.proyecto.proyecto.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(value="Administrador")
public class Administrador extends Usuario{

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public Administrador(String email, String contra, String rol) {
        super(email, contra, rol);
        // TODO Auto-generated constructor stub
    }
    public Administrador(){
        super();
    }


}