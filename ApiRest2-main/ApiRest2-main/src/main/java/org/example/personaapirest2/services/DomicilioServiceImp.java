package org.example.personaapirest2.services;

import org.example.personaapirest2.entities.Autor;
import org.example.personaapirest2.entities.Domicilio;
import org.example.personaapirest2.repositories.BaseRepository;
import org.springframework.stereotype.Service;

@Service
public class DomicilioServiceImp extends BaseServiceImp<Domicilio,Long> implements DomicilioService{
    public DomicilioServiceImp(BaseRepository<Domicilio,Long> baseRepository) {
        super(baseRepository);
    }
}
