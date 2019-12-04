package com.proyecto.proyecto.configuration.security;


import com.proyecto.proyecto.ProyectoApplication;
import com.proyecto.proyecto.model.Usuario;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class RESTUserDetailsService implements UserDetailsService {
	

	public RESTUserDetailsService() {
		super();
	}

	@Override
	public Usuario loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println("*** Retrieving user");
		return ProyectoApplication.users.get(username);
	}	

}
