package org.example.persona.entities.audit;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.envers.RevisionEntity;
import org.hibernate.envers.RevisionNumber;
import org.hibernate.envers.RevisionTimestamp;

import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "REVISION_INFO")
@Data
public class Revision implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "revision_seq")
    @SequenceGenerator(name = "revision_seq",sequenceName = "rbac.seq_revision_id")
    @RevisionNumber
    @Column(name = "Id")
    private int id;

    @Temporal(TemporalType.TIMESTAMP)
    @RevisionTimestamp
    @Column(name = "REVISION_DATE")
    private Date date;
}
