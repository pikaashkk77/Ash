package Airport.airport_flight.airportdao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import Airport.airport_flight.Interface.ArrivalInterface;
import Airport.airport_flight.entity.ArrivalEntity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;

@Repository
public class AirportArrivalImplementation implements ArrivalInterface {
	EntityManager entitymanager;
	@Autowired
public AirportArrivalImplementation(EntityManager entitymanager) {
		
		this.entitymanager = entitymanager;
	}
	
@Override
public List<ArrivalEntity> findAll()
{
	TypedQuery<ArrivalEntity> query=entitymanager.createQuery("FROM arrivalflight a ORDER BY a.arrdate, a.arr_time",ArrivalEntity.class);
    List<ArrivalEntity> Display=query.getResultList();
    return Display;
    
}
@Override
@Transactional
public ArrivalEntity save(ArrivalEntity air)
{
	return entitymanager.merge(air);
}
@Override
@Transactional
public void deleteByfno(String fno)
{
	ArrivalEntity air=entitymanager.find(ArrivalEntity.class,fno);
	entitymanager.remove(air);
	
}


}
