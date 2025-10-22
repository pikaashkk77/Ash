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

import Airport.airport_flight.airportdao.AirportImplementation;
import Airport.airport_flight.entity.AirportEntity;


@RestController
@RequestMapping("/Departure")
@CrossOrigin(origins = "http://localhost:3000")
public class AirportController {
	AirportImplementation airport;
	
	
	@Autowired
	public AirportController(AirportImplementation airport) {
			this.airport = airport;
	}
	@GetMapping("/Display")
	
	public List<AirportEntity> getAirport()
	{
		return airport.findAll();
	}
	@PostMapping("/insert")
	public AirportEntity insertFlight(@RequestBody AirportEntity air)
	{
		AirportEntity insert=airport.save(air);
		return insert;
	}
	@PutMapping("/update")
	public AirportEntity updateFlight(@RequestBody AirportEntity air)
	{
		AirportEntity insert=airport.save(air);
		return insert;
	}
	@DeleteMapping("/delete/{x}")
	public void deleteFlight(@PathVariable String x)
	{
		airport.deleteByfno(x);
		
	}
	

	
	

}
