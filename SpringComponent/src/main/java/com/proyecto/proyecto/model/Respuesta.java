package com.proyecto.proyecto.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Respuesta {
    @Id
    @GeneratedValue
    private long ID;
    private String mensaje;

    public Respuesta(){
    }
    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public long getID() {
        return ID;
    }

    public void setID(long iD) {
        ID = iD;
    }


    
}