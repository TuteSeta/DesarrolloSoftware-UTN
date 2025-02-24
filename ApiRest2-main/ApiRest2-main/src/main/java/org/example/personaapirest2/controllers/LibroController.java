package org.example.personaapirest2.controllers;


import org.example.personaapirest2.entities.Libro;
import org.example.personaapirest2.services.LibroService;
import org.example.personaapirest2.services.LibroServiceImp;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.AbstractController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/libros")
public class LibroController extends BaseControllerImpl<Libro, LibroServiceImp> {
}
