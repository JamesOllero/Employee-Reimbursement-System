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
                  fromDB.setPassword("");
            } else {
                fromDB = null;
            }
        }
        return fromDB;
    }

    public void createNewUser(User u) {
        userDao.createNewUser(u);
    }

    public void updateUser(User u) {
        userDao.updateUser(u);
    }

    public User getUserByEmail(String email) {
        User user = userDao.getUserByEmail(email);
        return user;
    }
}
