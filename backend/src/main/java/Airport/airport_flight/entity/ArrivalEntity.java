package Airport.airport_flight.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name="arrivalflight")
@Table(name="arrivalflight")
public class ArrivalEntity {
	
	
	@Id
	private String fno;
	private String arr_time;
	private String fname;
	
	private String origin;
	private String status;
	private String arrdate;
	public String getarr_time() {
		return arr_time;
	}
	public void setarr_time(String arr_time) {
		this.arr_time = arr_time;
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
	public String getorigin() {
		return origin;
	}
	public void setFrom(String origin) {
		this.origin = origin;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getArrdate() {
		return arrdate;
	}
	public void setArrdate(String arrdate) {
		this.arrdate = arrdate;
	}

}
