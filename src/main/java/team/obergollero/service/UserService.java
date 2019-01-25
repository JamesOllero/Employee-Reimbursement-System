package team.obergollero.service;

import team.obergollero.data.UserDao;
import team.obergollero.data.UserDaoImp;
import team.obergollero.pojo.User;

public class UserService {
    private UserDao userDao;
    public UserService() {
        this.userDao = new UserDaoImp();
    }
    public User authenticate(User u) {
        User fromDB = this.userDao.getUserByEmail(u.getEmail());
        if(fromDB!=null) {
            if(fromDB.getPassword().equals(u.getPassword())) {
                if(fromDB.getActive().toLowerCase().equals("active")){
                    fromDB.setPassword("");
                } else {
                    fromDB = null;
                }
            } else {
                fromDB = null;
            }
        }
        return fromDB;
    }
}
