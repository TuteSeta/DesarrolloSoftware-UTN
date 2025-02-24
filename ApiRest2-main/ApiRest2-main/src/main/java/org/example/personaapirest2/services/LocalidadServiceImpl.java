package org.example.personaapirest2.services;

import org.example.personaapirest2.entities.Localidad;
import org.example.personaapirest2.repositories.BaseRepository;
import org.springframework.stereotype.Service;

@Service
public class LocalidadServiceImpl extends BaseServiceImp<Localidad,Long> implements LocalidadService {
    public LocalidadServiceImpl(BaseRepository<Localidad,Long> repository) {
        super(repository);
    }
}
