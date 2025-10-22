package Airport.airport_flight.entity;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name="departureflight")
@Table(name="departureflight")
public class AirportEntity {
	
	
	@Id
	private String fno;
	private String dept_time;
	private String fname;
	
	private String loc;
	private String status;
	int seats;
	String deptdate;
	public String getDept_time() {
		return dept_time;
	}
	public void setDept_time(String dept_time) {
		this.dept_time = dept_time;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getFno() {
		return fno;
	}
	public void setFno(String fno) {
		this.fno = fno;
	}
	public String getLoc() {
		return loc;
	}
	public void setLoc(String loc) {
		this.loc = loc;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getSeats() {
		return seats;
	}
	public void setSeats(int seats) {
		this.seats = seats;
	}
	public String getDeptdate() {
		return deptdate;
	}
	public void setDeptdate(String deptdate) {
		this.deptdate = deptdate;
	}

}
