package org.example.personaapirest2.controllers;

import org.example.personaapirest2.entities.Localidad;
import org.example.personaapirest2.repositories.LocalidadRepository;
import org.example.personaapirest2.services.LocalidadServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/localidades")
public class LocalidadController extends BaseControllerImpl<Localidad, LocalidadServiceImpl> {
}
