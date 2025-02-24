package org.example.personaapirest2.config;

import org.example.personaapirest2.entities.audit.Revision;
import org.hibernate.envers.RevisionListener;

public class CustomRevisionListener implements RevisionListener {
    public void newRevision(Object revisionEntity) {

        final Revision revision = (Revision) revisionEntity;
    }
}
