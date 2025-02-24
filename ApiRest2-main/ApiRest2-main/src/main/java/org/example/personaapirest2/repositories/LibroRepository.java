package org.example.personaapirest2.repositories;

import org.example.personaapirest2.entities.Libro;
import org.springframework.stereotype.Repository;

@Repository
public interface LibroRepository extends BaseRepository<Libro,Long>{
}
