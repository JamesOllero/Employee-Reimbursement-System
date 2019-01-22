package team.obergollero.testing;

import java.sql.SQLException;

import team.obergollero.util.ConnectionUtil;
import team.obergollero.pojo.Reimbursement;
import team.obergollero.pojo.User;
import team.obergollero.data.ReimbursementDao;
import team.obergollero.data.ReimbursementDaoImp;
import java.util.List;

public class Testing {
	public static void main(String[] args) {
		try {
			ConnectionUtil.createConnectionManager("jdbc:postgresql://coberg-trainingdb.cyeu8paosfnf.us-east-2.rds.amazonaws.com:5432/inClass", "csoberg", "passblurb95$", new org.postgresql.Driver());
			ReimbursementDao reimbursementDao = new ReimbursementDaoImp();
			List<Reimbursement> reimbursements = reimbursementDao.getReimbursementsByUserId(1);
			for(Reimbursement r : reimbursements) {
				System.out.println(r);
			}
			List<Reimbursement> reimbursements2 = reimbursementDao.getReimbursementsByUserId(2);
			for(Reimbursement r : reimbursements2) {
				System.out.println(r);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
