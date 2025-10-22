package Airport.airport_flight.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Airport.airport_flight.airportdao.adminImplementation;
import Airport.airport_flight.entity.adminentity;

@RestController
@RequestMapping("/admin")
public class admincontroller {

    @Autowired
    private adminImplementation adminService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody adminentity credentials) {
        adminentity user = adminService.verify(credentials.getUsername(), credentials.getPassword());
        
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
