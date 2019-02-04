package team.obergollero.pojo;

import java.time.LocalDate;
import java.io.File;

public class Reimbursement {
    private int id;
    private double amount;
    private String description;
    private String fileName;
    private File reciept;
    private int authorId;
    private String authorName;
    private String authorFirstName;
    private String authorLastName;
    private int resolverId;
    private String resolverName;


  public String getAuthorName() {
    return authorName;
  }

  public void setAuthorName(String authorName) {
    this.authorName = authorName;
  }

  public String getResolverName() {
    return resolverName;
  }

  public void setResolverName(String resolverName) {
    this.resolverName = resolverName;
  }

  private String resolverFirstName;
    private String resolverLastName;
    private String status;
    private String type;

    public Reimbursement() {

    }

    public void setId(int id) {this.id = id;}
    public void setAmount(double amount) {this.amount = amount;}
    public void setDescription(String description) {this.description = description;}
    public void setFileName(String fileName) {this.fileName = fileName;}
    public void setReciept(File reciept) {this.reciept = reciept;}
    public void setAuthorId(int authorId) {this.authorId = authorId;}
    public void setAuthorFirstName(String authorFirstName) {this.authorFirstName = authorFirstName;}
    public void setAuthorLastName(String authorLastName) {this.authorLastName = authorLastName;}
    public void setResolverId(int resolverId) {this.resolverId = resolverId;}
    public void setResolverFirstName(String resolverFirstName) {this.resolverFirstName = resolverFirstName;}
    public void setResolverLastName(String resolverLastName) {this.resolverLastName = resolverLastName;}
    public void setStatus(String status) {this.status = status;}
    public void setType(String type) {this.type = type;}

    public int getId() {return this.id;}
    public double getAmount() {return this.amount;}
    public String getDescription() {return this.description;}
    public String getFileName() {return this.fileName;}
    public File getReciept() {return this.reciept;}
    public int getAuthorId() {return this.authorId;}
    public String getAuthorFirstName() {return this.authorFirstName;}
    public String getAuthorLastName() {return this.authorLastName;}
    public int getResolverId() {return this.resolverId;}
    public String getResolverFirstName() {return this.resolverFirstName;}
    public String getResolverLastName() {return this.resolverLastName;}
    public String getStatus() {return this.status;}
    public String getType() {return this.type;}

    @Override
    public String toString() {
        return "Reimbursement [id=" + id + ", amount=" + amount + ", description=" + description + ", reciept=" + fileName + ", author=" + authorFirstName + " " + authorLastName + ", resolver="
                + resolverFirstName + " " + resolverLastName + ", status=" + status + ", type=" + type + "]";
    }


}
