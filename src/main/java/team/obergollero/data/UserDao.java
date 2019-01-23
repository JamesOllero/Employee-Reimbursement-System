package team.obergollero.data;

import team.obergollero.pojo.User;

public interface UserDao {
	User getUserByUsername(String username);
	User getUserByEmail(String email);
	void createNewUser(User newUser);
}
