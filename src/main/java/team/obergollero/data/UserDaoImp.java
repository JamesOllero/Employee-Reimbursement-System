package team.obergollero.data;

import team.obergollero.pojo.User;
import team.obergollero.util.ConnectionUtil;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDaoImp implements UserDao {

	public User getUserByUsername(String username) {
		Connection c = null;
		User u = null;
		try{
		    c = ConnectionUtil.getConnectionManager().newConnection();
		    c.setAutoCommit(false);
		    String sql = "select ers_users_id as id," +
                    "ers_username as username," +
                    "ers_password as password," +
                    "user_first_name as firstname," +
                    "user_last_name as lastname," +
                    "user_email as email," +
                    "project_1.ers_user_roles.user_role as userrole " +
                    "from project_1.ers_users " +
                    "left join project_1.ers_user_roles on project_1.ers_users.user_role_id=project_1.ers_user_roles.ers_user_role_id " +
                    "where ers_username=?";
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setString(1, username);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
                u = new User();
                u.setId(rs.getInt("id"));
                u.setUsername(rs.getString("username"));
                u.setPassword(rs.getString("password"));
                u.setFirstName(rs.getString("firstname"));
                u.setLastName(rs.getString("lastname"));
                u.setEmail(rs.getString("email"));
                u.setRole(rs.getString("userrole"));
            }
            return u;
        } catch(SQLException e){
		    e.printStackTrace();
		    try{
		        c.rollback();
            } catch(SQLException e1){
		        e1.printStackTrace();
            }
        } finally {
		    if(c!=null){
		        try{
		            c.close();
                } catch(SQLException e){
		            e.printStackTrace();
                }
            }
        }
		return u;

	}

	public User getUserByEmail(String email) {
        Connection c = null;
        User u = null;
        try{
            c = ConnectionUtil.getConnectionManager().newConnection();
            c.setAutoCommit(false);
            String sql = "select ers_users_id as id," +
                    "ers_username as username," +
                    "ers_password as password," +
                    "user_first_name as firstname," +
                    "user_last_name as lastname," +
                    "user_email as email," +
                    "project_1.ers_user_roles.user_role as userrole " +
                    "from project_1.ers_users " +
                    "left join project_1.ers_user_roles on project_1.ers_users.user_role_id=project_1.ers_user_roles.ers_user_role_id " +
                    "where user_email=?";
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
                u = new User();
                u.setId(rs.getInt("id"));
                u.setUsername(rs.getString("username"));
                u.setPassword(rs.getString("password"));
                u.setFirstName(rs.getString("firstname"));
                u.setLastName(rs.getString("lastname"));
                u.setEmail(rs.getString("email"));
                u.setRole(rs.getString("userrole"));
            }
            return u;
        } catch(SQLException e){
            e.printStackTrace();
            try{
                c.rollback();
            } catch(SQLException e1){
                e1.printStackTrace();
            }
        } finally {
            if(c!=null){
                try{
                    c.close();
                } catch(SQLException e){
                    e.printStackTrace();
                }
            }
        }
        return u;
	}

	public void createNewUser(User newUser){
	    Connection c = null;
	    try {
	        c = ConnectionUtil.getConnectionManager().newConnection();
	        c.setAutoCommit(false);
	        String sql = "insert into project_1.ers_users (ers_username, ers_password, user_first_name, user_last_name, user_email, user_role_id) values (?,?,?,?,?,?)";
	        PreparedStatement ps = c.prepareStatement(sql);
	        ps.setString(1, newUser.getUsername());
	        ps.setString(2, newUser.getPassword());
	        ps.setString(3, newUser.getFirstName());
	        ps.setString(4, newUser.getLastName());
	        ps.setString(5, newUser.getEmail());
	        switch(newUser.getRole().toLowerCase()) {
                case "employee":
                    ps.setInt(6, 0);
                    break;
                case "manager":
                    ps.setInt(6, 1);
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
	        if(c!=null){
	            try{
	                c.close();
                } catch(SQLException e) {
	                e.printStackTrace();
                }
            }
        }
    }
}
