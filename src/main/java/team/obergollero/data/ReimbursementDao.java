package team.obergollero.data;

import team.obergollero.pojo.Reimbursement;
import team.obergollero.pojo.User;

import java.util.List;

public interface ReimbursementDao {
	List<Reimbursement> getReimbursementsByUserId(int userId);
	List<Reimbursement> getReimbursementsByType(int type);
	List<Reimbursement> getReimbursementsByStatus(int status);
	void addNewReimbursement(Reimbursement reimbursemnt);
	List<Reimbursement> getAllReimbursements();
	void updateReimbursement(Reimbursement reimbursement);
	int getLatestId();
	List<Reimbursement> getFiveReimbursements(int userId);
}
