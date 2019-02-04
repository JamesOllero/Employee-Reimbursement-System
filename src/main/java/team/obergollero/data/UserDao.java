package team.obergollero.data;

import team.obergollero.pojo.User;

import java.util.List;

public interface UserDao {
	User getUserByUsername(String username);
	User getUserByEmail(String email);
	void createNewUser(User newUser);
	void updateUser(User user);
	User getUserById(int userId);
	List<User> getAllUsers();
	int getLatestId();
	String encrypt(String password);
}
