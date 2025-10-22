package Airport.airport_flight.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Airport.airport_flight.airportdao.AirportArrivalImplementation;
import Airport.airport_flight.entity.ArrivalEntity;




@RestController
@RequestMapping("/Arrival")
@CrossOrigin(origins = "http://localhost:3000")
public class ArrivalController {
	AirportArrivalImplementation airport;
	
	
	 @Autowired
	public ArrivalController(AirportArrivalImplementation airport) {
			this.airport = airport;
	}
	@GetMapping("/display")
	
	public List<ArrivalEntity> getAirport()
	{
		return airport.findAll();
	}
	@PostMapping("/Insert")
	public ArrivalEntity insertFlight(@RequestBody ArrivalEntity air)
	{
		ArrivalEntity insert=airport.save(air);
		return insert;
	}
	@PutMapping("/Update")
	public ArrivalEntity updateFlight(@RequestBody ArrivalEntity air)
	{
		ArrivalEntity insert=airport.save(air);
		return insert;
	}
	@DeleteMapping("/Delete/{x}")
	public void deleteFlight(@PathVariable String x)
	{
		airport.deleteByfno(x);
		
	}
	

	
	

}
