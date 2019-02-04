package team.obergollero.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import team.obergollero.pojo.Reimbursement;
import team.obergollero.service.ReimbursementService;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDate;
import java.util.List;

public class ReimbursementServlet extends HttpServlet {
    private ReimbursementService reimbursementService;
    @Override
    public void init() throws ServletException {
        reimbursementService = new ReimbursementService();
        try {
            Class.forName("com.fasterxml.jackson.databind.ObjectMapper");
        } catch (ClassNotFoundException e) {
            throw new ServletException("Could not load Jackson Databind");
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if(req.getParameter("userId")!=null) {
          if (req.getParameter("recent") != null) {
            try {
              int userId = Integer.parseInt(req.getParameter("userId"));
              String recentReimbursements = getRecentReimbursements(userId);
              resp.setStatus(200);
              resp.setHeader("Content-Type", "application/json");
              resp.getWriter().write(recentReimbursements);
              return;
            } catch (NumberFormatException e) {
              e.printStackTrace();
              resp.sendError(400, "Issue in the request");
            }
          } else {
            try {
              int userId = Integer.parseInt(req.getParameter("userId"));
              String userReimbursements = getReimbursementsByUser(userId);
              resp.setStatus(200);
              resp.setHeader("Content-Type", "application/json");
              resp.getWriter().write(userReimbursements);
              return;
            } catch (NumberFormatException e) {
              e.printStackTrace();
              resp.sendError(400, "User Id must be a parseable integer");
              return;
            }

          }
        }else if(req.getParameter("reimbursementId")!=null) {
          try{
            int reimbursementId = Integer.parseInt(req.getParameter("reimbursementId"));
            String detailedReimbursement = getDetailedReimbursement(reimbursementId);
            resp.setStatus(200);
            resp.setHeader("Content-Type", "application.json");
            resp.getWriter().write(detailedReimbursement);
            return;
          } catch (NumberFormatException e) {
            e.printStackTrace();
            resp.sendError(400, "Reimbursement Id must be a parseable integer");
          }
        }
        else {
          String allReimbursements = getAllReimbursements();
          resp.setStatus(200);
          resp.setHeader("Content-Type", "application/json");
          resp.getWriter().write(allReimbursements);
        }
    }

    private String getReimbursementsByUser(int id) {
        List<Reimbursement> userReimbursements = reimbursementService.getReimbursementsByUser(id);
        try {
            return new ObjectMapper().writeValueAsString(userReimbursements);
        } catch(JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    private String getAllReimbursements() {
        List<Reimbursement> reimbursements = reimbursementService.getAllReimbursements();
        try {
            return new ObjectMapper().writeValueAsString(reimbursements);
        } catch(JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    private String getRecentReimbursements(int userId) {
        List<Reimbursement> reimbursements = this.reimbursementService.getFiveReimbursements(userId);
        try {
          return new ObjectMapper().writeValueAsString(reimbursements);
        } catch (JsonProcessingException e) {
          e.printStackTrace();
        }
        return null;
    }
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        InputStream in = req.getInputStream();
        Reimbursement reimbursement = new ObjectMapper().readValue(in,Reimbursement.class);
        if(reimbursement==null) {
            resp.sendError(400, "Message body unreadable");
            return;
        }
        if(reimbursement.getId()==0) {
            addReimbursement(reimbursement);
            resp.setStatus(200);
            resp.setHeader("Location", "http://localhost:8080/tickets/tickets?id=" + reimbursement.getId());
        } else {
          updateReimbursement(reimbursement);
          resp.setStatus(200);
          resp.setHeader("Location", "http://localhost:8080/tickets/tickets?id=" + reimbursement.getId());
        }
    }

    private void addReimbursement(Reimbursement r) {
        reimbursementService.addNewReimbursement(r);
        r.setId(reimbursementService.getLatestId());
    }

    private void updateReimbursement(Reimbursement r) {
        reimbursementService.updateReimbursement(r);
    }

    private String getDetailedReimbursement(int reimbursementId) {
      Reimbursement reimbursement = reimbursementService.getReimbursement(reimbursementId);
      try {
        return new ObjectMapper().writeValueAsString(reimbursement);
      } catch(JsonProcessingException e) {
        e.printStackTrace();
      }
      return null;
      }
}
