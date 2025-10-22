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

import Airport.airport_flight.airportdao.PassengerImplementation;
import Airport.airport_flight.entity.Passengerentity;

@RestController
@RequestMapping("/Passenger")
@CrossOrigin(origins = "http://localhost:3000")
public class PassengerController {
	PassengerImplementation passenger;
	
	
	 @Autowired
	public PassengerController(PassengerImplementation passenger) {
			this.passenger = passenger;
	}
	@GetMapping("/displaypass")
	public List<Passengerentity> getAirport()
	{
		return passenger.findAll();
	}
	@PostMapping("/Insertpass")
	public String insertFlight(@RequestBody Passengerentity pass)
	{
		String result = passenger.insertPassenger(pass, pass.getFlight(), pass.getLocation());
        return result;
	}
	@PutMapping("/Updatepass")
	public Passengerentity updateFlight(@RequestBody Passengerentity pass)
	{
		Passengerentity insert=passenger.save(pass);
		return insert;
	}
	@DeleteMapping("/Deletepass/{x}")
	public void deleteFlight(@PathVariable int x)
	{
		passenger.deleteByfno(x);
		
	}
	

	
	

}
