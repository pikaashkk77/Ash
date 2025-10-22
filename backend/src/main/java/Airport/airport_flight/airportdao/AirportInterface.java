package Airport.airport_flight.airportdao;

import java.util.List;

import Airport.airport_flight.entity.AirportEntity;


public interface AirportInterface {
List<AirportEntity> findAll();
AirportEntity save(AirportEntity air);
void deleteByfno(String fno);
}
