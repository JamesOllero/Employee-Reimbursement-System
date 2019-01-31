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

    public void addNewReimbursement(Reimbursement r) {
        this.reimbursementDao.addNewReimbursement(r);
    }

    public int getLatestId() {
        return this.reimbursementDao.getLatestId();
    }

    public void updateReimbursement(Reimbursement r) {
        this.reimbursementDao.updateReimbursement(r);
    }

    public List<Reimbursement> getFiveReimbursements(int userId) {return this.reimbursementDao.getFiveReimbursements(userId);}
}
