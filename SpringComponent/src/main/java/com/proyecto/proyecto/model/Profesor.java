package com.proyecto.proyecto.model;




import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import org.springframework.security.core.userdetails.UserDetails;


@Entity
@DiscriminatorValue(value = "Profesor")
public class Profesor extends Usuario implements UserDetails{

    
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    
    public Profesor(){
        super();
    }
  

}