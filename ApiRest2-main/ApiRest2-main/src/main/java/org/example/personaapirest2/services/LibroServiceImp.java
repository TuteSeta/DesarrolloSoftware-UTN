package org.example.personaapirest2.services;

import org.example.personaapirest2.entities.Libro;
import org.example.personaapirest2.entities.Localidad;
import org.example.personaapirest2.repositories.BaseRepository;
import org.springframework.stereotype.Service;

@Service
public class LibroServiceImp extends BaseServiceImp<Libro,Long> implements LibroService{
    public LibroServiceImp(BaseRepository<Libro,Long> repository) {
        super(repository);
    }
}
