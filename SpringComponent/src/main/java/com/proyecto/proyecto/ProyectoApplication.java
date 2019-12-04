package com.proyecto.proyecto;

import java.util.HashMap;
import java.util.Map;

import com.proyecto.proyecto.model.Usuario;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration;

@SpringBootApplication(exclude = RepositoryRestMvcAutoConfiguration.class)
public class ProyectoApplication {
	public static Map<String, Usuario> users = new HashMap<>();
	public static void main(String[] args) {
		SpringApplication.run(ProyectoApplication.class, args);
	}

}
