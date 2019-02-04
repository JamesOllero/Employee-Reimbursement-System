package team.obergollero.service;

import team.obergollero.data.UserDao;
import team.obergollero.data.UserDaoImp;
import team.obergollero.pojo.User;

import java.util.List;

public class UserService {
    private UserDao userDao;
    public UserService() {
        this.userDao = new UserDaoImp();
    }
    public User authenticate(User u) {
        User fromDB = this.userDao.getUserByEmail(u.getEmail());
        if(fromDB!=null) {
            u.setPassword(this.userDao.encrypt(u.getPassword()));
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

    public User getUserById(int userId) {
        return this.userDao.getUserById(userId);
    }

    public List<User> getAllUsers() {
        return this.userDao.getAllUsers();
    }

    public int getLatestId() {return this.userDao.getLatestId();}

    public void addNewUser(User u) {this.userDao.createNewUser(u);}
}
