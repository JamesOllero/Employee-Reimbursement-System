package team.obergollero.web;

import com.fasterxml.jackson.databind.ObjectMapper;
import team.obergollero.pojo.User;
import team.obergollero.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginServlet extends HttpServlet {
    private UserService userService;
    @Override
    public void init() throws ServletException {
        userService = new UserService();
        try {
            Class.forName("com.fasterxml.jackson.databind.ObjectMapper");
        } catch(ClassNotFoundException e) {
            throw new ServletException("Could not load Jackson Databind");
        }
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        User attempt = new ObjectMapper().readValue(req.getInputStream(), User.class);
        if(attempt==null) {
            resp.setStatus(400);
            resp.getWriter().write("No data sumitted");
            return;
        } else {
            attempt = this.userService.authenticate(attempt);
            if(attempt!=null) {
                resp.setStatus(200);
                resp.getWriter().write(new ObjectMapper().writeValueAsString(attempt));
                return;
            }
        }
        resp.setStatus(401);
        resp.getWriter().write("Invalid Credentials");
    }
}
