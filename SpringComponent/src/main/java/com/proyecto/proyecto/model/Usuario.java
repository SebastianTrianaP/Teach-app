package com.proyecto.proyecto.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonView;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * Usuario
 */
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Usuario implements UserDetails {

    /**
     *
     */
    protected static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue
    Long id;
    protected String email;
    protected String nombre;
    protected String apellidos;

    protected String contra;
    protected String rol;
    @Transient
    protected boolean accountNonExpired;
    @Transient
    protected boolean accountNonLocked;
    @Transient
    protected boolean credentialsNonExpired;
    @Transient
	protected boolean enabled;
    @Transient
    @JsonView
    protected List<GrantedAuthority> autorizaciones = new ArrayList<GrantedAuthority>();

    public Usuario(){
    }
    public  Usuario(String email, String contra, String rol) {
		this.email = email;
        this.contra = contra;
        this.rol = rol;
        autorizaciones = new ArrayList<GrantedAuthority>();
	}



    /**
     * @return id
     */
    public Long getId() {
        return id;
    }

    /**
     * @return nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @return apellidos
     */
    public String getApellidos() {
        return apellidos;
    }

    /**
     * @return email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @return contra
     */
    public String getContra() {
        return contra;
    }

    /**
     * @return rol
     */
    public String getRol() {
        return rol;
    }

    /**
     * @param id id a cambiar
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @param name nombre a cambiar
     */
    public void setName(String name) {
        this.nombre = name;
    }

    /**
     * @param name apellidos a cambiar
     */
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    /**
     * @param name email a cambiar
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @param name contra a cambiar
     */
    public void setContra(String contra) {
        this.contra = contra;
    }

    /**
     * @param name rol a cambiar
     */
    public void setRol(String rol) {
        this.rol = rol;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(autorizaciones.isEmpty()){
            GrantedAuthority ga = new GrantedAuthority(){
                private static final long serialVersionUID = -3483137563784976405L;
        
                        @Override
                        public String getAuthority() {
                            return rol;
                        }
                    };
                    autorizaciones.add(ga);
        }        
        return autorizaciones;
    }
    
    @Override
    public String getPassword() {
        return contra;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return accountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return accountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setAccountNonExpired(boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public List<GrantedAuthority> getAutorizaciones() {
        return autorizaciones;
    }

    public void setAutorizaciones(List<GrantedAuthority> autorizaciones) {
        this.autorizaciones = autorizaciones;
    }
}