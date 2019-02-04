package team.obergollero.testing;

import java.sql.SQLException;

import team.obergollero.data.UserDao;
import team.obergollero.data.UserDaoImp;
import team.obergollero.util.ConnectionUtil;
import team.obergollero.pojo.Reimbursement;
import team.obergollero.pojo.User;
import team.obergollero.data.ReimbursementDao;
import team.obergollero.data.ReimbursementDaoImp;
import team.obergollero.util.EncryptionUtil;

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
            UserDao userDao = new UserDaoImp();
			User oberg = userDao.getUserByEmail("oberg.chris@yahoo.com");
			System.out.println(oberg);
			User duet = userDao.getUserByUsername("aduet");
			System.out.println(duet);
		} catch (SQLException e) {
			e.printStackTrace();
		}

		testEncryption("password1");
		testEncryption("another1");
	}

	public static void testEncryption(String input) {
    System.out.println(EncryptionUtil.finalScore(input));
  }
}
