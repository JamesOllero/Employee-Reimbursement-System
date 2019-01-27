package team.obergollero.web;

import team.obergollero.pojo.User;
import team.obergollero.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class UserServlet extends HttpServlet {
    private UserService userService;

    public void init() throws ServletException {
        userService = new UserService();
        try {
            Class.forName("com.fasterxml.jackson.databind.ObjectMapper");
        } catch (ClassNotFoundException e) {
            throw new ServletException("Could not load Jackson Databind");
        }
    }


    //Support getting the information for the user for displaying, as well as the five most recent reimbursment requests
    // to be submitted by the user.
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    }

    private String getUserById(int userId) {
        User user = userService.getUserById
    }
}
