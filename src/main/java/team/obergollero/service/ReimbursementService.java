package team.obergollero.service;

import team.obergollero.data.ReimbursementDao;
import team.obergollero.data.ReimbursementDaoImp;
import team.obergollero.pojo.Reimbursement;

import java.util.List;

public class ReimbursementService {
    private ReimbursementDao reimbursementDao;

    public ReimbursementService() {
        this.reimbursementDao = new ReimbursementDaoImp();
    }

    public List<Reimbursement> getReimbursementsByUser(int id) {
        return this.reimbursementDao.getReimbursementsByUserId(id);
    }

    public List<Reimbursement> getAllReimbursements() {
        return this.reimbursementDao.getAllReimbursements();
    }
}
