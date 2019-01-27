package team.obergollero.data;

import java.util.List;
import java.util.ArrayList;

import org.postgresql.core.SqlCommand;
import team.obergollero.pojo.Reimbursement;
import team.obergollero.pojo.User;
import team.obergollero.util.ConnectionUtil;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.FileOutputStream;

/*
CRUD Operations:
CREATE: COMPLETE
READ:
-By Id: COMPLETE
-By Type: COMPLETE
-By Status: COMPLETE
-All: COMPLETE
UPDATE: COMPLETE
DELETE: UNNEEDED (Financial record keeping best practices discourage active deletion of records. Therefore, it is in the
better interest of the program to have an employee status of "Active" vs. "Inactive".)
 */

public class ReimbursementDaoImp implements ReimbursementDao {

	//read from id
	@Override
	public List<Reimbursement> getReimbursementsByUserId(int userId) {
		Connection c = null;
		List<Reimbursement> reimbursements = new ArrayList<Reimbursement>();
		File reciept = null;
		FileOutputStream fos = null;
		try {
			c = ConnectionUtil.getConnectionManager().newConnection();
			c.setAutoCommit(false);
			String sql = "select reimb_id as id,"
					+ " reimb_amount as amount,"
					+ " reimb_submitted as submitted,"
					+ " reimb_resolved as resolved,"
					+ " reimb_description as description,"
					+ " reimb_reciept_title as reciept_name,"
					+ " reimb_reciept as reciept,"
					+ " author.ers_users_id as author_id,"
					+ " author.user_first_name as author_first_name,"
					+ " author.user_last_name as author_last_name,"
					+ " resolver.ers_users_id as resolver_id,"
					+ " resolver.user_first_name as resolver_first_name,"
					+ " resolver.user_last_name as resolver_last_name,"
					+ " project_1.ers_reimbursement_status.reimb_status as status,"
					+ " project_1.ers_reimbursement_type.reimb_type as reimbursement_type"
					+ " from project_1.ers_reimbursement"
					+ " left join project_1.ers_users as author"
					+ " on project_1.ers_reimbursement.reimb_author=author.ers_users_id"
					+ " left join project_1.ers_users as resolver"
					+ " on project_1.ers_reimbursement.reimb_resolver=resolver.ers_users_id"
					+ " left join project_1.ers_reimbursement_status"
					+ " on project_1.ers_reimbursement.reimb_status_id=project_1.ers_reimbursement_status.reimb_status_id"
					+ " left join project_1.ers_reimbursement_type"
					+ " on project_1.ers_reimbursement.reimb_type_id=project_1.ers_reimbursement_type.reimb_type_id"
					+ " where reimb_author = ?"
					+ " order by id asc;";
			PreparedStatement ps = c.prepareStatement(sql);
			ps.setInt(1, userId);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				Reimbursement r = new Reimbursement();
				r.setId(rs.getInt("id"));
				r.setAmount(rs.getDouble("amount"));
				r.setSubmitted(rs.getDate("submitted").toLocalDate());
				if(rs.getDate("resolved")==null) {
					r.setResolved(null);
				} else {
					r.setResolved(rs.getDate("resolved").toLocalDate());
				}
				r.setDescription(rs.getString("description"));
				byte[] rawfile = rs.getBytes("reciept");
				// Make file names a column for the file. create a directory to store the various files.
				if(rawfile==null) {
					r.setFileName(null);
					r.setReciept(null);
				} else {
					String path = "../../../../file_resources/" + rs.getString("reciept_name");
					reciept = new File(path);
					reciept.mkdirs();
					fos = new FileOutputStream(reciept);
					fos.write(rawfile);
					r.setFileName(rs.getString("reciept_name"));
					r.setReciept(reciept);
				}
				r.setAuthorId(rs.getInt("author_id"));
				r.setAuthorFirstName(rs.getString("author_first_name"));
				r.setAuthorLastName(rs.getString("author_last_name"));
				if(rs.getInt("resolver_id")==0) {
					r.setResolverId(0);
					r.setResolverFirstName(null);
					r.setResolverLastName(null);
				} else {
					r.setResolverId(rs.getInt("resolver_id"));
//					re.setUsername(rs.getString("resolver_username"));
//					re.setPassword("--REDACTED--");
					r.setResolverFirstName(rs.getString("resolver_first_name"));
					r.setResolverLastName(rs.getString("resolver_last_name"));
//					re.setEmail(rs.getString("resolver_email"));
//					re.setRole(rs.getString("resolver_role_type"));
//					r.setResolver(re);
				}
				r.setStatus(rs.getString("status"));
				r.setType(rs.getString("reimbursement_type"));
				reimbursements.add(r);
			}
			c.commit();
			c.setAutoCommit(true);
			return reimbursements;
		} catch(SQLException e) {
			e.printStackTrace();
			try {
				c.rollback();
			} catch(SQLException e1) {
				e1.printStackTrace();
			}
		} catch(IOException e) {
			e.printStackTrace();
			try {
				c.rollback();
			} catch(SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			if(c!=null) {
				try {
					c.close();
				} catch(SQLException e) {
					e.printStackTrace();
				}
			}
			if(fos!=null) {
				try {
					fos.close();
				} catch(IOException e) {
					e.printStackTrace();
				}
			}
		}
		return reimbursements;
	}

	//read from type
	@Override
	@Deprecated
	public List<Reimbursement> getReimbursementsByType(int type) {
//		Connection c = null;
//		List<Reimbursement> reimbursements = new ArrayList<Reimbursement>();
//		File reciept = null;
//		FileOutputStream fos = null;
//		try {
//			c = ConnectionUtil.getConnectionManager().newConnection();
//			c.setAutoCommit(false);
//			String sql = "select reimb_id as id,"
//					+ " reimb_amount as amount,"
//					+ " reimb_submitted as submitted,"
//					+ " reimb_resolved as resolved,"
//					+ " reimb_description as description,"
//					+ " reimb_reciept_title as reciept_name,"
//					+ " reimb_reciept as reciept,"
//					+ " author.ers_users_id as author_id,"
//					+ " author.ers_username as author_username,"
//					+ " author.user_first_name as author_first_name,"
//					+ " author.user_last_name as author_last_name,"
//					+ " author.user_email as author_email,"
//					+ " author_role.user_role as author_role_type,"
//					+ " resolver.ers_users_id as resolver_id,"
//					+ " resolver.ers_username as resolver_username,"
//					+ " resolver.user_first_name as resolver_first_name,"
//					+ " resolver.user_last_name as resolver_last_name,"
//					+ " resolver.user_email as resolver_email,"
//					+ " resolver_role.user_role as resolver_role_type,"
//					+ " project_1.ers_reimbursement_status.reimb_status as status,"
//					+ " project_1.ers_reimbursement_type.reimb_type as reimbursement_type"
//					+ " from project_1.ers_reimbursement"
//					+ " left join project_1.ers_users as author"
//					+ " on project_1.ers_reimbursement.reimb_author=author.ers_users_id"
//					+ " left join project_1.ers_user_roles as author_role"
//					+ " on author.user_role_id=author_role.ers_user_role_id"
//					+ " left join project_1.ers_users as resolver"
//					+ " on project_1.ers_reimbursement.reimb_resolver=resolver.ers_users_id"
//					+ " left join project_1.ers_user_roles as resolver_role"
//					+ " on resolver.user_role_id=resolver_role.ers_user_role_id"
//					+ " left join project_1.ers_reimbursement_status"
//					+ " on project_1.ers_reimbursement.reimb_status_id=project_1.ers_reimbursement_status.reimb_status_id"
//					+ " left join project_1.ers_reimbursement_type"
//					+ " on project_1.ers_reimbursement.reimb_type_id=project_1.ers_reimbursement_type.reimb_type_id"
//					+ " where reimb_type_id = ?"
//					+ " order by id asc;";
//			PreparedStatement ps = c.prepareStatement(sql);
//			ps.setInt(1, type);
//			ResultSet rs = ps.executeQuery();
//			while(rs.next()) {
//				Reimbursement r = new Reimbursement();
//				User a = new User();
//				User re = new User();
//				r.setId(rs.getInt("id"));
//				r.setAmount(rs.getDouble("amount"));
//				r.setSubmitted(rs.getDate("submitted").toLocalDate());
//				if(rs.getDate("resolved")==null) {
//					r.setResolved(null);
//				} else {
//					r.setResolved(rs.getDate("resolved").toLocalDate());
//				}
//				r.setDescription(rs.getString("description"));
//				byte[] rawfile = rs.getBytes("reciept");
//				// Make file names a column for the file. create a directory to store the various bits.
//				if(rawfile==null) {
//					r.setFileName(null);
//					r.setReciept(null);
//				} else {
//					String path = "../../../../file_resources/" + rs.getString("reciept_name");
//					reciept = new File(path);
//					reciept.mkdirs();
//					fos = new FileOutputStream(reciept);
//					fos.write(rawfile);
//					r.setFileName(rs.getString("reciept_name"));
//					r.setReciept(reciept);
//				}
//				a.setId(rs.getInt("author_id"));
//				a.setUsername(rs.getString("author_username"));
//				a.setPassword("--REDACTED--");
//				a.setFirstName(rs.getString("author_first_name"));
//				a.setLastName(rs.getString("author_last_name"));
//				a.setEmail(rs.getString("author_email"));
//				a.setRole(rs.getString("author_role_type"));
//				r.setAuthor(a);
//				if(rs.getInt("resolver_id")==0) {
//					r.setResolver(re);
//				} else {
//					re.setId(rs.getInt("resolver_id"));
//					re.setUsername(rs.getString("resolver_username"));
//					re.setPassword("--REDACTED--");
//					re.setFirstName(rs.getString("resolver_first_name"));
//					re.setLastName(rs.getString("resolver_last_name"));
//					re.setEmail(rs.getString("resolver_email"));
//					re.setRole(rs.getString("resolver_role_type"));
//					r.setResolver(re);
//				}
//				r.setStatus(rs.getString("status"));
//				r.setType(rs.getString("reimbursement_type"));
//				reimbursements.add(r);
//			}
//			c.commit();
//			c.setAutoCommit(true);
//			return reimbursements;
//		} catch(SQLException e) {
//			e.printStackTrace();
//			try {
//				c.rollback();
//			} catch(SQLException e1) {
//				e1.printStackTrace();
//			}
//		} catch(IOException e) {
//			e.printStackTrace();
//			try {
//				c.rollback();
//			} catch(SQLException e1) {
//				e1.printStackTrace();
//			}
//		} finally {
//			if(c!=null) {
//				try {
//					c.close();
//				} catch(SQLException e) {
//					e.printStackTrace();
//				}
//			}
//			if(fos!=null) {
//				try {
//					fos.close();
//				} catch(IOException e) {
//					e.printStackTrace();
//				}
//			}
//		}
//		return reimbursements;
		return null;
	}

	//read from status
	@Override
	@Deprecated
	public List<Reimbursement> getReimbursementsByStatus(int status) {
//		Connection c = null;
//		List<Reimbursement> reimbursements = new ArrayList<Reimbursement>();
//		File reciept = null;
//		FileOutputStream fos = null;
//		try {
//			c = ConnectionUtil.getConnectionManager().newConnection();
//			c.setAutoCommit(false);
//			String sql = "select reimb_id as id,"
//					+ " reimb_amount as amount,"
//					+ " reimb_submitted as submitted,"
//					+ " reimb_resolved as resolved,"
//					+ " reimb_description as description,"
//					+ " reimb_reciept_title as reciept_name,"
//					+ " reimb_reciept as reciept,"
//					+ " author.ers_users_id as author_id,"
//					+ " author.ers_username as author_username,"
//					+ " author.user_first_name as author_first_name,"
//					+ " author.user_last_name as author_last_name,"
//					+ " author.user_email as author_email,"
//					+ " author_role.user_role as author_role_type,"
//					+ " resolver.ers_users_id as resolver_id,"
//					+ " resolver.ers_username as resolver_username,"
//					+ " resolver.user_first_name as resolver_first_name,"
//					+ " resolver.user_last_name as resolver_last_name,"
//					+ " resolver.user_email as resolver_email,"
//					+ " resolver_role.user_role as resolver_role_type,"
//					+ " project_1.ers_reimbursement_status.reimb_status as status,"
//					+ " project_1.ers_reimbursement_type.reimb_type as reimbursement_type"
//					+ " from project_1.ers_reimbursement"
//					+ " left join project_1.ers_users as author"
//					+ " on project_1.ers_reimbursement.reimb_author=author.ers_users_id"
//					+ " left join project_1.ers_user_roles as author_role"
//					+ " on author.user_role_id=author_role.ers_user_role_id"
//					+ " left join project_1.ers_users as resolver"
//					+ " on project_1.ers_reimbursement.reimb_resolver=resolver.ers_users_id"
//					+ " left join project_1.ers_user_roles as resolver_role"
//					+ " on resolver.user_role_id=resolver_role.ers_user_role_id"
//					+ " left join project_1.ers_reimbursement_status"
//					+ " on project_1.ers_reimbursement.reimb_status_id=project_1.ers_reimbursement_status.reimb_status_id"
//					+ " left join project_1.ers_reimbursement_type"
//					+ " on project_1.ers_reimbursement.reimb_type_id=project_1.ers_reimbursement_type.reimb_type_id"
//					+ " where reimb_status_id = ?"
//					+ " order by id asc;";
//			PreparedStatement ps = c.prepareStatement(sql);
//			ps.setInt(1, status);
//			ResultSet rs = ps.executeQuery();
//			while(rs.next()) {
//				Reimbursement r = new Reimbursement();
//				User a = new User();
//				User re = new User();
//				r.setId(rs.getInt("id"));
//				r.setAmount(rs.getDouble("amount"));
//				r.setSubmitted(rs.getDate("submitted").toLocalDate());
//				if(rs.getDate("resolved")==null) {
//					r.setResolved(null);
//				} else {
//					r.setResolved(rs.getDate("resolved").toLocalDate());
//				}
//				r.setDescription(rs.getString("description"));
//				byte[] rawfile = rs.getBytes("reciept");
//				// Make file names a column for the file. create a directory to store the various bits.
//				if(rawfile==null) {
//					r.setFileName(null);
//					r.setReciept(null);
//				} else {
//					String path = "../../../../file_resources/" + rs.getString("reciept_name");
//					reciept = new File(path);
//					reciept.mkdirs();
//					fos = new FileOutputStream(reciept);
//					fos.write(rawfile);
//					r.setFileName(rs.getString("reciept_name"));
//					r.setReciept(reciept);
//				}
//				a.setId(rs.getInt("author_id"));
//				a.setUsername(rs.getString("author_username"));
//				a.setPassword("--REDACTED--");
//				a.setFirstName(rs.getString("author_first_name"));
//				a.setLastName(rs.getString("author_last_name"));
//				a.setEmail(rs.getString("author_email"));
//				a.setRole(rs.getString("author_role_type"));
//				r.setAuthor(a);
//				if(rs.getInt("resolver_id")==0) {
//					r.setResolver(re);
//				} else {
//					re.setId(rs.getInt("resolver_id"));
//					re.setUsername(rs.getString("resolver_username"));
//					re.setPassword("--REDACTED--");
//					re.setFirstName(rs.getString("resolver_first_name"));
//					re.setLastName(rs.getString("resolver_last_name"));
//					re.setEmail(rs.getString("resolver_email"));
//					re.setRole(rs.getString("resolver_role_type"));
//					r.setResolver(re);
//				}
//				r.setStatus(rs.getString("status"));
//				r.setType(rs.getString("reimbursement_type"));
//				reimbursements.add(r);
//			}
//			c.commit();
//			c.setAutoCommit(true);
//			return reimbursements;
//		} catch(SQLException e) {
//			e.printStackTrace();
//			try {
//				c.rollback();
//			} catch(SQLException e1) {
//				e1.printStackTrace();
//			}
//		} catch(IOException e) {
//			e.printStackTrace();
//			try {
//				c.rollback();
//			} catch(SQLException e1) {
//				e1.printStackTrace();
//			}
//		} finally {
//			if(c!=null) {
//				try {
//					c.close();
//				} catch(SQLException e) {
//					e.printStackTrace();
//				}
//			}
//			if(fos!=null) {
//				try {
//					fos.close();
//				} catch(IOException e) {
//					e.printStackTrace();
//				}
//			}
//		}
//		return reimbursements;
	return null;
	}

	//read all
	@Override
	public List<Reimbursement> getAllReimbursements() {
		Connection c = null;
		List<Reimbursement> reimbursements = new ArrayList<Reimbursement>();
		File reciept = null;
		FileOutputStream fos = null;
		try {
			c = ConnectionUtil.getConnectionManager().newConnection();
			c.setAutoCommit(false);
			String sql = "select reimb_id as id,"
					+ " reimb_amount as amount,"
					+ " reimb_submitted as submitted,"
					+ " reimb_resolved as resolved,"
					+ " reimb_description as description,"
					+ " reimb_reciept_title as reciept_name,"
					+ " reimb_reciept as reciept,"
					+ " author.ers_users_id as author_id,"
					+ " author.user_first_name as author_first_name,"
					+ " author.user_last_name as author_last_name,"
					+ " resolver.ers_users_id as resolver_id,"
					+ " resolver.user_first_name as resolver_first_name,"
					+ " resolver.user_last_name as resolver_last_name,"
					+ " project_1.ers_reimbursement_status.reimb_status as status,"
					+ " project_1.ers_reimbursement_type.reimb_type as reimbursement_type"
					+ " from project_1.ers_reimbursement"
					+ " left join project_1.ers_users as author"
					+ " on project_1.ers_reimbursement.reimb_author=author.ers_users_id"
					+ " left join project_1.ers_users as resolver"
					+ " on project_1.ers_reimbursement.reimb_resolver=resolver.ers_users_id"
					+ " left join project_1.ers_reimbursement_status"
					+ " on project_1.ers_reimbursement.reimb_status_id=project_1.ers_reimbursement_status.reimb_status_id"
					+ " left join project_1.ers_reimbursement_type"
					+ " on project_1.ers_reimbursement.reimb_type_id=project_1.ers_reimbursement_type.reimb_type_id"
					+ " order by id asc;";
			PreparedStatement ps = c.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				Reimbursement r = new Reimbursement();
				r.setId(rs.getInt("id"));
				r.setAmount(rs.getDouble("amount"));
				r.setSubmitted(rs.getDate("submitted").toLocalDate());
				if(rs.getDate("resolved")==null) {
					r.setResolved(null);
				} else {
					r.setResolved(rs.getDate("resolved").toLocalDate());
				}
				r.setDescription(rs.getString("description"));
				byte[] rawfile = rs.getBytes("reciept");
				// Make file names a column for the file. create a directory to store the various files.
				if(rawfile==null) {
					r.setFileName(null);
					r.setReciept(null);
				} else {
					String path = "../../../../file_resources/" + rs.getString("reciept_name");
					reciept = new File(path);
					reciept.mkdirs();
					fos = new FileOutputStream(reciept);
					fos.write(rawfile);
					r.setFileName(rs.getString("reciept_name"));
					r.setReciept(reciept);
				}
				r.setAuthorId(rs.getInt("author_id"));
				r.setAuthorFirstName(rs.getString("author_first_name"));
				r.setAuthorLastName(rs.getString("author_last_name"));
				if(rs.getInt("resolver_id")==0) {
					r.setResolverId(0);
					r.setResolverFirstName(null);
					r.setResolverLastName(null);
				} else {
					r.setResolverId(rs.getInt("resolver_id"));
					r.setResolverFirstName(rs.getString("resolver_first_name"));
					r.setResolverLastName(rs.getString("resolver_last_name"));
				}
				r.setStatus(rs.getString("status"));
				r.setType(rs.getString("reimbursement_type"));
				reimbursements.add(r);
			}
			c.commit();
			c.setAutoCommit(true);
			return reimbursements;
		} catch(SQLException e) {
			e.printStackTrace();
			try {
				c.rollback();
			} catch(SQLException e1) {
				e1.printStackTrace();
			}
		} catch(IOException e) {
			e.printStackTrace();
			try {
				c.rollback();
			} catch(SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			if(c!=null) {
				try {
					c.close();
				} catch(SQLException e) {
					e.printStackTrace();
				}
			}
			if(fos!=null) {
				try {
					fos.close();
				} catch(IOException e) {
					e.printStackTrace();
				}
			}
		}
		return reimbursements;
	}

	//create
	@Override
	public void addNewReimbursement(Reimbursement reimbursement) {
		Connection c = null;
		FileInputStream fis = null;
		try {
			c = ConnectionUtil.getConnectionManager().newConnection();
			c.setAutoCommit(false);
			File reciept = null;
			String sql = "insert into project_1.ers_reimbursement " +
					"(reimb_amount, " +
					"reimb_submitted, " +
					"reimb_description, " +
					"reimb_reciept_title, " +
					"reimb_reciept, " +
					"reimb_author, " +
					"reimb_status_id, " +
					"reimb_type_id) " +
					"values (?,?,?,?,?,?,?,?,?,?)";
			PreparedStatement ps = c.prepareStatement(sql);
			ps.setDouble(1, reimbursement.getAmount());
			ps.setDate(2, Date.valueOf(reimbursement.getSubmitted()));
			ps.setString(3, reimbursement.getDescription());
			if(reimbursement.getReciept()==null) {
				ps.setString(4, null);
				ps.setBinaryStream(5, null);
			} else {
				ps.setString(4, reimbursement.getFileName());
				reciept = reimbursement.getReciept();
				try {
					fis = new FileInputStream(reciept);
				} catch (FileNotFoundException e) {
					e.printStackTrace();
				}
				ps.setBinaryStream(5, fis);
			}
			ps.setInt(6, reimbursement.getAuthorId());
			ps.setInt(7, 0);
			switch(reimbursement.getType().toLowerCase()) {
			case "lodging":
				ps.setInt(8, 0);
				break;
			case "travel":
				ps.setInt(8, 1);
				break;
			case "food":
				ps.setInt(8, 2);
				break;
			case "other":
				ps.setInt(8, 3);
				break;
			}
			ps.executeUpdate();
			c.commit();
			c.setAutoCommit(true);
		} catch(SQLException e) {
			e.printStackTrace();
			try {
				c.rollback();
			} catch(SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			if(c!=null) {
				try {
					c.close();
				} catch(SQLException e) {
					e.printStackTrace();
				}
			}
			if(fis!=null) {
				try {
					fis.close();
				} catch(IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

	//update
	@Override
	public void updateReimbursement(Reimbursement reimbursement) {
		Connection c = null;
		FileInputStream fis = null;
		try {
			c = ConnectionUtil.getConnectionManager().newConnection();
			c.setAutoCommit(false);
			String sql = "update project_1.ers_reimbursement set " +
					"reimb_amount=?," +
					"reimb_submitted=?," +
					"reimb_resolved=?," +
					"reimb_description=?," +
					"reimb_reciept_title=?," +
					"reimb_reciept=?," +
					"reimb_author=?," +
					"reimb_resolver=?," +
					"reimb_status_id=?," +
					"reimb_type_id=? " +
					"where reimb_id=?";
			PreparedStatement ps = c.prepareStatement(sql);
			ps.setDouble(1, reimbursement.getAmount());
			ps.setDate(2, Date.valueOf(reimbursement.getSubmitted()));
			ps.setDate(3, Date.valueOf(reimbursement.getResolved()));
			ps.setString(4, reimbursement.getDescription());
			ps.setString(5, reimbursement.getFileName());
			if (reimbursement.getReciept() == null) {
				ps.setBinaryStream(6, null);
			} else {
				fis = new FileInputStream(reimbursement.getReciept());
				ps.setBinaryStream(6, fis);
			}
			ps.setInt(7, reimbursement.getAuthorId());
			if(reimbursement.getResolverId()==0) {
				ps.setInt(8, 0);
			} else {
				ps.setInt(8, reimbursement.getResolverId());
			}
			switch(reimbursement.getStatus().toLowerCase()){
				case "pending":
					ps.setInt(9, 0);
					break;
				case "approved":
					ps.setInt(9, 1);
					break;
				case "denied":
					ps.setInt(9, 2);
					break;
			}
			switch(reimbursement.getType().toLowerCase()){
				case "lodging":
					ps.setInt(10, 0);
					break;
				case "travel":
					ps.setInt(10, 1);
					break;
				case "food":
					ps.setInt(10, 2);
					break;
				case "other":
					ps.setInt(10, 3);
					break;
			}
			ps.setInt(11, reimbursement.getId());
			ps.executeUpdate();
			c.commit();
			c.setAutoCommit(true);
		} catch (SQLException e) {
			e.printStackTrace();
			try {
				c.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		} catch(IOException e) {
			e.printStackTrace();
			try {
				c.rollback();
			} catch(SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			if(c!=null) {
				try {
					c.close();
				} catch(SQLException e) {
					e.printStackTrace();
				}
			}
			if(fis!=null) {
				try {
					fis.close();
				} catch(IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

	@Override
	public int getLatestId() {
		int id = 0;
		Connection c = null;
		try {
			c = ConnectionUtil.getConnectionManager().newConnection();
			c.setAutoCommit(false);
			String sql = "select reimb_id from project_1.ers_reimbursement order by reimb_id desc limit 1";
			PreparedStatement ps = c.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				id = rs.getInt("reimb_id");
			}
			c.commit();
			c.setAutoCommit(true);
			return id;
		} catch(SQLException e) {
			e.printStackTrace();
			try {
				c.rollback();
			} catch(SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			if(c!=null) {
				try {
					c.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return id;
	}
}
