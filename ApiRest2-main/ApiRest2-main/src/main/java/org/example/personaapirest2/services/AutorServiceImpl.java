package org.example.personaapirest2.services;

import org.example.personaapirest2.entities.Autor;
import org.example.personaapirest2.repositories.AutorRepository;
import org.example.personaapirest2.repositories.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AutorServiceImpl extends BaseServiceImp<Autor,Long> implements AutorService {
    @Autowired
    private AutorRepository autorRepository;

    public AutorServiceImpl(BaseRepository<Autor,Long> baseRepository) {
        super(baseRepository);
    }
}
