package team.obergollero.data;

import java.util.List;
import java.util.ArrayList;
import team.obergollero.pojo.Reimbursement;
import team.obergollero.pojo.User;
import team.obergollero.util.ConnectionUtil;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ReimbursmentDaoImp implements ReimbursementDao {

	public List<Reimbursement> getReimbursementsByUserId(int userId) {
		Connection c = null;
		List<Reimbursement> reimbursements = new ArrayList<Reimbursement>();
		try {
			c = ConnectionUtil.getConnectionManager().newConnection();
			c.setAutoCommit(false);
			String sql = "";
			PreparedStatement ps = c.prepareStatement(sql);
			ps.setInt(1, userId);
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				Reimbursement r = new Reimbursement();
				
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
		} finally {
			if(c!=null) {
				try {
					c.close();
				} catch(SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return reimbursements;
	}

	public List<Reimbursement> getReimbursementsByType(int type) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Reimbursement> getReimbursementsByStatus(int status) {
		// TODO Auto-generated method stub
		return null;
	}

}
