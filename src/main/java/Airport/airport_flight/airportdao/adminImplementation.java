package Airport.airport_flight.airportdao;

import org.springframework.stereotype.Repository;

import Airport.airport_flight.adminInterface.adminverify;
import Airport.airport_flight.entity.adminentity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.TypedQuery;

@Repository
public class adminImplementation implements adminverify {

    private final EntityManager entityManager;

    public adminImplementation(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
@Override
    public adminentity verify(String username, String password) {
        try {
            
            TypedQuery<adminentity> query = entityManager.createQuery(
                "SELECT a FROM adminentity a WHERE a.username = :username AND a.password = :password", 
                adminentity.class
            );
            query.setParameter("username", username);
            query.setParameter("password", password);

            return query.getSingleResult(); // Will return the user if username/password match
        } catch (NoResultException e) {
            throw new RuntimeException("Invalid credentials!"); // Username or password incorrect
        }
    }
}
