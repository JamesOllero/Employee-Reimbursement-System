package team.obergollero.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import team.obergollero.pojo.Reimbursement;
import team.obergollero.pojo.User;
import team.obergollero.service.ReimbursementService;
import team.obergollero.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class UserServlet extends HttpServlet {
    private UserService userService;
    private ReimbursementService reimbursementService;

    public void init() throws ServletException {
        userService = new UserService();
        reimbursementService = new ReimbursementService();
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
        if(req.getParameter("userId")!=null) {
            try {
                int userId = Integer.parseInt(req.getParameter("userId"));
                String lastFiveReimbursements = getFiveReimbursements(userId);
                resp.setStatus(200);
                resp.setHeader("Content-Type", "application/json");
                resp.getWriter().write(lastFiveReimbursements);
                return;
            } catch (NumberFormatException e) {
                e.printStackTrace();
                resp.sendError(400, "User Id must be a parseable integer");
                return;
            }
        } else if(req.getParameter("employeeId")!=null) {
          try {
            int userId = Integer.parseInt(req.getParameter("employeeId"));
            String employeeDetails = getEmployeeDetails(userId);
            resp.setStatus(200);
            resp.setHeader("Content-Type", "application/json");
            resp.getWriter().write(employeeDetails);
            return;
          } catch (NumberFormatException e) {
            e.printStackTrace();
            resp.sendError(400, "User Id must be a parseable integer");
            return;
          }
        } else {
            String allEmployees = getAllEmployees();
            resp.setStatus(200);
            resp.setHeader("Content-Type", "application/json");
            resp.getWriter().write(allEmployees);
        }
    }

    private String getAllEmployees() {
      List<User> users = userService.getAllUsers();
      try {
        return new ObjectMapper().writeValueAsString(users);
      } catch (JsonProcessingException e) {
        e.printStackTrace();
      }
      return null;
    }

    private String getFiveReimbursements(int userId) {
        List<Reimbursement> reimbursements = reimbursementService.getFiveReimbursements(userId);
        try {
            return new ObjectMapper().writeValueAsString(reimbursements);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    private String getEmployeeDetails(int userId) {
      User user = userService.getUserById(userId);
      try {
        return new ObjectMapper().writeValueAsString(user);
      } catch (JsonProcessingException e) {
        e.printStackTrace();
      }
      return null;
    }

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      InputStream in = req.getInputStream();
      User user = new ObjectMapper().readValue(in, User.class);
      if(user == null) {
        resp.sendError(400, "Message body unreadable");
        return;
      }
      if(user.getId()==0) {
        addUser(user);
        resp.setStatus(200);
        resp.setHeader("Location", "http://localhost:8080/user/users?id=" + user.getId());
      }
    }

    public void addUser(User u) {
      userService.addNewUser(u);
      u.setId(userService.getLatestId());
    }
}
