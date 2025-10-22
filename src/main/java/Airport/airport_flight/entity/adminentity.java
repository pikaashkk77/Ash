package Airport.airport_flight.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="admin")
public class adminentity {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
int nameid;
String name;
String username;
String password;
public int getNameid() {
	return nameid;
}
public void setNameid(int nameid) {
	this.nameid = nameid;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}

}
