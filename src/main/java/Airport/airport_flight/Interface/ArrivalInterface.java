package Airport.airport_flight.Interface;

import java.util.List;

import Airport.airport_flight.entity.ArrivalEntity;



public interface ArrivalInterface {
List<ArrivalEntity> findAll();
ArrivalEntity save(ArrivalEntity air);
void deleteByfno(String fno);
}
