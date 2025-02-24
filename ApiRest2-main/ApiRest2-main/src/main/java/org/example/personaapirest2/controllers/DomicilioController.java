package org.example.personaapirest2.controllers;

import org.example.personaapirest2.entities.Domicilio;
import org.example.personaapirest2.services.BaseServiceImp;
import org.example.personaapirest2.services.DomicilioServiceImp;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/domicilios")
public class DomicilioController extends BaseControllerImpl<Domicilio, DomicilioServiceImp> {
}
