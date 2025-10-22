package Airport.airport_flight.airportdao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import Airport.airport_flight.entity.AirportEntity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;

@Repository
public class AirportImplementation implements AirportInterface {
	EntityManager entitymanager;
	@Autowired
public AirportImplementation(EntityManager entitymanager) {
		
		this.entitymanager = entitymanager;
	}
	
@Override
public List<AirportEntity> findAll()
{
	TypedQuery<AirportEntity> query=entitymanager.createQuery("FROM departureflight a ORDER BY a.deptdate, a.dept_time ",AirportEntity.class);
    List<AirportEntity> Display=query.getResultList();
    return Display;
    
}
@Override
@Transactional
public AirportEntity save(AirportEntity air)
{
	return entitymanager.merge(air);
}
@Override
@Transactional
public void deleteByfno(String fno)
{
	AirportEntity air=entitymanager.find(AirportEntity.class,fno);
	entitymanager.remove(air);
	
}


}
