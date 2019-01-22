package team.obergollero.pojo;

import java.time.LocalDate;
import java.io.File;

public class Reimbursement {
	private int id;
	private double amount;
	private LocalDate submitted;
	private LocalDate resolved;
	private String description;
	private String fileName;
	private File reciept;
	private User author;
	private User resolver;
	private String status;
	private String type;
	
	public Reimbursement() {
		
	}
	
	public void setId(int id) {this.id = id;}
	public void setAmount(double amount) {this.amount = amount;}
	public void setSubmitted(LocalDate submitted) {this.submitted = submitted;}
	public void setResolved(LocalDate resolved) {this.resolved = resolved;}
	public void setDescription(String description) {this.description = description;}
	public void setFileName(String fileName) {this.fileName = fileName;}
	public void setReciept(File reciept) {this.reciept = reciept;}
	public void setAuthor(User author) {this.author = author;}
	public void setResolver(User resolver) {this.resolver = resolver;}
	public void setStatus(String status) {this.status = status;}
	public void setType(String type) {this.type = type;}
	
	public int getId() {return this.id;}
	public double getAmount() {return this.amount;}
	public LocalDate getSubmitted() {return this.submitted;}
	public LocalDate getResolved() {return this.resolved;}
	public String getDescription() {return this.description;}
	public String getFileName() {return this.fileName;}
	public File getReciept() {return this.reciept;}
	public User getAuthor() {return this.author;}
	public User getResolver() {return this.resolver;}
	public String getStatus() {return this.status;}
	public String getType() {return this.type;}

	@Override
	public String toString() {
		return "Reimbursement [id=" + id + ", amount=" + amount + ", submitted=" + submitted + ", resolved=" + resolved
				+ ", description=" + description + ", reciept=" + fileName + ", author=" + author.getFirstName() + " " + author.getLastName() + ", resolver="
				+ resolver.getFirstName() + " " + resolver.getLastName() + ", status=" + status + ", type=" + type + "]";
	}
	
	
}
