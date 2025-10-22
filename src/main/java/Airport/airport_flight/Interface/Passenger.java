package Airport.airport_flight.Interface;

import java.util.List;


import Airport.airport_flight.entity.Passengerentity;



public interface Passenger {
List<Passengerentity> findAll();
Passengerentity save(Passengerentity pass);
void deleteByfno(int pid);
}
