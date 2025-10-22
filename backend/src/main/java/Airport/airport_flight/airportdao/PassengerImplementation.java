package Airport.airport_flight.airportdao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import Airport.airport_flight.Interface.Passenger;
import Airport.airport_flight.entity.AirportEntity;
import Airport.airport_flight.entity.Passengerentity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;

@Repository
public class PassengerImplementation implements Passenger {
	EntityManager entitymanager;
	@Autowired
public PassengerImplementation(EntityManager entitymanager) {
		
		this.entitymanager = entitymanager;
	}
	
@Override
public List<Passengerentity> findAll()
{
	TypedQuery<Passengerentity> query=entitymanager.createQuery("from passenger",Passengerentity.class);
    List<Passengerentity> Display=query.getResultList();
    return Display;
    
}
@Override
@Transactional
public Passengerentity save(Passengerentity pass)
{
	return entitymanager.merge(pass);
}
@Override
@Transactional
public void deleteByfno(int fno)
{
	Passengerentity air=entitymanager.find(Passengerentity.class,fno);
	entitymanager.remove(air);
	
}

@Transactional
public String seat(String flight, String location) {
    // Create the query to select the entity
    TypedQuery<AirportEntity> query = entitymanager.createQuery(
        "SELECT a FROM departureflight a WHERE a.fname = :flight AND a.loc = :location", 
        AirportEntity.class
    );
    
    // Set the parameters for the query
    query.setParameter("flight", flight);
    query.setParameter("location", location);
    
    
    // Fetch the result (assuming there is only one matching entity)
    AirportEntity airportEntity = query.getSingleResult();
    if (airportEntity.getSeats() <= 0)
    return "Seats are full";
        
    
    // Decrement the seats
    int updatedSeats = airportEntity.getSeats() - 1;
    System.out.println("Updated Seats: " + updatedSeats);
    airportEntity.setSeats(updatedSeats);  // Set the updated value
    
    // Merge the changes to persist them
    entitymanager.merge(airportEntity);
    return "Booking Successfull";
}
@Transactional
public String insertPassenger(Passengerentity pass, String flight, String location) {
    // Check seat availability first
    String seatCheck = seat(flight, location);
    if ("Seats are full".equals(seatCheck)) {
        return seatCheck;  // If seats are full, do not proceed with insertion
    }

    // Proceed to save passenger details
    save(pass);
    return "Booking Successfull";
}
}


