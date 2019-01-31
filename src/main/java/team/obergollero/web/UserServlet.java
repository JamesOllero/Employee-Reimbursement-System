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
        } else {
            resp.sendError(400, "No user information sent");
        }
    }

//    private String getUserById(int userId) {
//        User user = userService.getUserById
//    }

    private String getFiveReimbursements(int userId) {
        List<Reimbursement> reimbursements = reimbursementService.getFiveReimbursements(userId);
        try {
            return new ObjectMapper().writeValueAsString(reimbursements);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
