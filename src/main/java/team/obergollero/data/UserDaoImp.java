package team.obergollero.data;

import team.obergollero.pojo.User;
import team.obergollero.util.ConnectionUtil;
import team.obergollero.util.EncryptionUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/*
CRUD Operations:
CREATE: COMPLETE
READ:
-by Username: COMPLETE
-by Email: COMPLETE
UPDATE: COMPLETE
DELETE: UNNEEDED (Financial record keeping best practices discourage active deletion of records. Therefore, it is in the
better interest of the program to have an employee status of "Active" vs. "Inactive". This will be handled in the update
method.)
*/
public class UserDaoImp implements UserDao {

    //read by username
    @Deprecated
    public User getUserByUsername(String username) {
//		Connection c = null;
//		User u = null;
//		try{
//		    c = ConnectionUtil.getConnectionManager().newConnection();
//		    c.setAutoCommit(false);
//		    String sql = "select ers_users_id as id, " +
//                    "ers_username as username, " +
//                    "ers_password as password, " +
//                    "user_first_name as firstname, " +
//                    "user_last_name as lastname, " +
//                    "user_email as email, " +
//                    "project_1.ers_user_roles.user_role as userrole, " +
//                    "from project_1.ers_users " +
//                    "left join project_1.ers_user_roles " +
//                    "on project_1.ers_users.user_role_id=project_1.ers_user_roles.ers_user_role_id " +
//                    "where ers_username = ?";;
//            PreparedStatement ps = c.prepareStatement(sql);
//            ps.setString(1, username);
//            ResultSet rs = ps.executeQuery();
//            while(rs.next()){
//                u = new User();
//                u.setId(rs.getInt("id"));
//                u.setUsername(rs.getString("username"));
//                u.setPassword(rs.getString("password"));
//                u.setFirstName(rs.getString("firstname"));
//                u.setLastName(rs.getString("lastname"));
//                u.setEmail(rs.getString("email"));
//                u.setRole(rs.getString("userrole"));
//            }
//            c.commit();
//            c.setAutoCommit(true);
//            return u;
//        } catch(SQLException e){
//		    e.printStackTrace();
//		    try{
//		        c.rollback();
//            } catch(SQLException e1){
//		        e1.printStackTrace();
//            }
//        } finally {
//		    if(c!=null){
//		        try{
//		            c.close();
//                } catch(SQLException e){
//		            e.printStackTrace();
//                }
//            }
//        }
//		return u;
        return null;
    }

    //read by email
    public User getUserByEmail(String email) {
        Connection c = null;
        User u = null;
        try {
            c = ConnectionUtil.getConnectionManager().newConnection();
            c.setAutoCommit(false);
            String sql = "select ers_users_id as id, " +
                "ers_username as username, " +
                "ers_password as password, " +
                "user_first_name as firstname, " +
                "user_last_name as lastname, " +
                "user_email as email, " +
                "project_1.ers_user_roles.user_role as userrole " +
                "from project_1.ers_users " +
                "left join project_1.ers_user_roles " +
                "on ers_users.user_role_id=ers_user_roles.ers_user_role_id " +
                "where user_email = ?";
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                u = new User();
                u.setId(rs.getInt("id"));
                u.setUsername(rs.getString("username"));
                u.setPassword(rs.getString("password"));
                u.setFirstName(rs.getString("firstname"));
                u.setLastName(rs.getString("lastname"));
                u.setEmail(rs.getString("email"));
                u.setRole(rs.getString("userrole"));
            }
            c.commit();
            c.setAutoCommit(true);
            return u;
        } catch (SQLException e) {
            e.printStackTrace();
            try {
                c.rollback();
            } catch (SQLException e1) {
                e1.printStackTrace();
            }
        } finally {
            if (c != null) {
                try {
                    c.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return u;
    }

    //create
    public void createNewUser(User newUser) {
        Connection c = null;
        try {
            c = ConnectionUtil.getConnectionManager().newConnection();
            c.setAutoCommit(false);
            String sql = "insert into project_1.ers_users " +
                "(ers_username, " +
                "ers_password, " +
                "user_first_name, " +
                "user_last_name, " +
                "user_email, " +
                "user_role_id) " +
                "values (?,?,?,?,?,?)";
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setString(1, newUser.getUsername());
            ps.setString(2, newUser.getPassword());
            ps.setString(3, newUser.getFirstName());
            ps.setString(4, newUser.getLastName());
            ps.setString(5, newUser.getEmail());
            switch (newUser.getRole().toLowerCase()) {
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
        } catch (SQLException e) {
            e.printStackTrace();
            try {
                c.rollback();
            } catch (SQLException e1) {
                e1.printStackTrace();
            }
        } finally {
            if (c != null) {
                try {
                    c.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    //update
    public void updateUser(User user) {
        Connection c = null;
        try {
            c = ConnectionUtil.getConnectionManager().newConnection();
            c.setAutoCommit(false);
            String sql = "update project_1.ers_users set " +
                "ers_username=?," +
                "ers_password=?," +
                "user_first_name=?," +
                "user_last_name=?," +
                "user_email=?," +
                "user_role_id=?," +
                "where ers_users_id=?";
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setString(1, user.getUsername());
            ps.setString(2, user.getPassword());
            ps.setString(3, user.getFirstName());
            ps.setString(4, user.getLastName());
            ps.setString(5, user.getEmail());
            switch (user.getRole().toLowerCase()) {
                case "employee":
                    ps.setInt(6, 0);
                    break;
                case "manager":
                    ps.setInt(6, 1);
                    break;
            }
            ps.setInt(7, user.getId());
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
        } finally {
            if (c != null) {
                try {
                    c.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }


    public User getUserById(int userId) {
        Connection c = null;
        User u = null;
        try {
            c = ConnectionUtil.getConnectionManager().newConnection();
            c.setAutoCommit(false);
            String sql = "select ers_users_id as id, " +
                "ers_username as username, " +
                "ers_password as password, " +
                "user_first_name as firstname, " +
                "user_last_name as lastname, " +
                "user_email as email, " +
                "project_1.ers_user_roles.user_role as userrole " +
                "from project_1.ers_users " +
                "left join project_1.ers_user_roles " +
                "on ers_users.user_role_id=ers_user_roles.ers_user_role_id " +
                "where ers_users_id = ?";
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setInt(1, userId);
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
            c.commit();
            c.setAutoCommit(true);
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

        public List<User> getAllUsers() {
            Connection c = null;
            List<User> users = new ArrayList<>();
            try {
                c = ConnectionUtil.getConnectionManager().newConnection();
                c.setAutoCommit(false);
                String sql = "select ers_users_id as id, " +
                    "ers_username as username, " +
                    "ers_password as password, " +
                    "user_first_name as firstname, " +
                    "user_last_name as lastname, " +
                    "user_email as email, " +
                    "project_1.ers_user_roles.user_role as userrole " +
                    "from project_1.ers_users " +
                    "left join project_1.ers_user_roles " +
                    "on ers_users.user_role_id=ers_user_roles.ers_user_role_id " +
                    "order by ers_users_id";
                PreparedStatement ps = c.prepareStatement(sql);
                ResultSet rs = ps.executeQuery();
                while(rs.next()){
                    User u = new User();
                    u.setId(rs.getInt("id"));
                    u.setUsername(rs.getString("username"));
                    u.setPassword(rs.getString("password"));
                    u.setFirstName(rs.getString("firstname"));
                    u.setLastName(rs.getString("lastname"));
                    u.setEmail(rs.getString("email"));
                    u.setRole(rs.getString("userrole"));
                    users.add(u);
                }
                c.commit();
                c.setAutoCommit(true);
                return users;
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
            return users;
        }

        public int getLatestId() {
            int id = 0;
            Connection c = null;
            try {
                c = ConnectionUtil.getConnectionManager().newConnection();
                c.setAutoCommit(false);
                String sql = "select ers_users_id from project_1.ers_users order by ers_users_id desc limit 1";
                PreparedStatement ps = c.prepareStatement(sql);
                ResultSet rs = ps.executeQuery();
                while(rs.next()) {
                    id = rs.getInt("ers_users_id");
                }
                c.commit();
                c.setAutoCommit(true);
                return id;
            } catch (SQLException e) {
                e.printStackTrace();
                try{
                    c.rollback();
                } catch (SQLException e1) {
                    e1.printStackTrace();
                }
            } finally {
                if(c!=null) {
                    try{
                        c.close();
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            }
            return id;
        }

        public String encrypt(String password) {
            return EncryptionUtil.finalScore(password);
        }
    }
