package com.proyecto.proyecto.model;



import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

/**
 * UsuarioRepository
 */
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

	Optional<Usuario> findByEmail(String email);

}